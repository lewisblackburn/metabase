import { MinusIcon, PlusIcon } from 'lucide-react'

interface AuditLogDifferenceProps {
    difference: Record<string, { old: unknown; new: unknown }>
}

export default function AuditLogDifference({ difference }: AuditLogDifferenceProps) {
    if (!difference || typeof difference !== 'object' || Array.isArray(difference)) {
        return null
    }

    return (
        <div>
            {Object.entries(difference)
                .filter(([, change]) => {
                    if (!change || typeof change !== 'object' || Array.isArray(change)) {
                        return false
                    }
                    return change.old !== null || change.new !== null
                })
                .map(([key, change]) => (
                    <div key={key}>
                        <div className="bg-secondary px-4 py-2 font-medium text-sm">{key}</div>
                        <div className="grid grid-cols-2 divide-x">
                            {change.old !== null && change.old !== undefined && (
                                <div className="bg-red-50 dark:bg-red-950/20 p-3 flex items-start gap-2">
                                    <MinusIcon className="size-4 text-red-600 dark:text-red-400 shrink-0 mt-[2px]" />
                                    <div className="flex-1">
                                        <div className="text-sm wrap-break-word">
                                            {typeof change.old === 'object' && change.old !== null
                                                ? JSON.stringify(change.old, null, 2)
                                                : String(change.old)}
                                        </div>
                                    </div>
                                </div>
                            )}
                            {change.new !== null && change.new !== undefined && (
                                <div
                                    className={`bg-green-50 dark:bg-green-950/20 p-3 flex items-start gap-2 ${
                                        change.old === null || change.old === undefined
                                            ? 'col-span-2'
                                            : ''
                                    }`}
                                >
                                    <PlusIcon className="size-4 text-green-600 dark:text-green-400 shrink-0 mt-[2px]" />
                                    <div className="flex-1">
                                        <div className="text-sm wrap-break-word">
                                            {typeof change.new === 'object' && change.new !== null
                                                ? JSON.stringify(change.new, null, 2)
                                                : String(change.new)}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
        </div>
    )
}
