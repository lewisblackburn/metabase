'use client';

import AuditLogs from '@/components/shared/audit-logs';

import { useSong } from './song-provider';

export default function SongChanges() {
    const { song } = useSong();
    return <AuditLogs tableName='songs' entityId={song?.id} />;
}
