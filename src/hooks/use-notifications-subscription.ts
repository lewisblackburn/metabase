'use client';

import { useEffect } from 'react';

import { OnNotificationsDocument, OnNotificationsSubscription } from '@/generated/graphql';
import { useAccessToken, useUserId } from '@nhost/nextjs';
import { useQueryClient } from '@tanstack/react-query';

import { Client, SubscribePayload, createClient } from 'graphql-ws';

export function useNotificationsSubscription() {
    const userId = useUserId();
    const token = useAccessToken();
    const queryClient = useQueryClient();

    useEffect(() => {
        if (!userId || !token) return;

        const WS_URL = `wss://${process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN}.hasura.${process.env.NEXT_PUBLIC_NHOST_REGION}.nhost.run/v1/graphql`;

        const ws: Client = createClient({
            url: WS_URL,
            connectionParams: { headers: { Authorization: `Bearer ${token}` } }
        });

        const payload: SubscribePayload = {
            query: OnNotificationsDocument,
            variables: { user_id: userId }
        };

        const dispose = ws.subscribe(payload, {
            next: (msg) => {
                const data = (msg as { data?: OnNotificationsSubscription }).data;
                if (!data?.notifications?.length) return;

                queryClient.setQueryData<{ notifications: OnNotificationsSubscription['notifications'] }>(
                    ['notifications', userId],
                    (old) => {
                        const prev = old?.notifications ?? [];
                        const existingIds = new Set(prev.map((n) => n.id));
                        const incoming = data.notifications.filter((n) => !existingIds.has(n.id));

                        return {
                            notifications: [...incoming, ...prev]
                        };
                    }
                );
            },
            error: (err) => {
                console.error('Notification subscription error:', err);
            },
            complete: () => {
                console.log('Notification subscription completed');
            }
        });

        return () => {
            dispose();
        };
    }, [userId, token, queryClient]);
}
