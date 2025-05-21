'use client';

import AuditLogs from '@/components/shared/audit-logs';

import { useBook } from './book-provider';

export default function BookChanges() {
    const { book } = useBook();
    return <AuditLogs tableName='books' entityId={book?.id} />;
}
