'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import type { SystemStatus } from '@/lib/types/status'
import { getStatusIndicator } from '@/lib/types/status'

export default function SystemStatusButton() {
    const [data, setData] = useState<SystemStatus | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function fetchStatus() {
            try {
                const res = await fetch('/api/status')

                if (!res.ok) {
                    throw new Error('Failed to fetch status')
                }

                const statusData: SystemStatus = await res.json()
                setData(statusData)
            } catch (error) {
                console.error('Failed to fetch system status:', error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchStatus()
    }, [])

    const indicator = data
        ? getStatusIndicator(Object.values(data.status))
        : { color: 'bg-gray-500', glow: 'bg-gray-400/50', text: 'Loading status...' }

    return (
        <Button
            asChild
            variant="secondary"
            className="bg-secondary/40 flex items-center gap-2 text-sm sm:text-base"
            disabled={isLoading}
        >
            <Link href="/status">
                <div className="relative size-1.75">
                    {!isLoading && (
                        <span
                            className={clsx(
                                'absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 size-2.75 animate-pulse rounded-full',
                                indicator.glow,
                            )}
                        />
                    )}
                    <span
                        className={clsx(
                            'absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 size-full rounded-full',
                            indicator.color,
                        )}
                    />
                </div>
                {indicator.text}
            </Link>
        </Button>
    )
}
