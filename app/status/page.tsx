import { CheckCircle2, XCircle } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { SystemStatus } from '@/lib/types/status'
import { STATUS_REVALIDATE_TIME } from '@/lib/types/status'

async function getSystemStatus(): Promise<SystemStatus> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/status`, {
        next: { revalidate: STATUS_REVALIDATE_TIME },
    })

    if (!res.ok) {
        throw new Error('Failed to fetch system status')
    }

    return res.json()
}

export default async function StatusPage() {
    const { status, updatedAt } = await getSystemStatus()
    const services = Object.entries(status)

    return (
        <main className="max-w-2xl mx-auto px-4 py-12">
            <Card className="shadow-lg border-border/50">
                <CardHeader>
                    <CardTitle className="flex items-center justify-between text-2xl font-semibold">
                        System Status
                        <Badge variant="outline" className="text-xs font-medium">
                            Updated {new Date(updatedAt).toLocaleTimeString()}
                        </Badge>
                    </CardTitle>
                </CardHeader>
                <CardContent className="divide-y divide-border/60">
                    {services.map(([service, isHealthy]) => (
                        <div
                            key={service}
                            className="flex items-center justify-between py-4 text-sm sm:text-base"
                        >
                            <span className="capitalize font-medium">{service}</span>
                            <div className="flex items-center gap-2">
                                {isHealthy ? (
                                    <>
                                        <CheckCircle2 className="text-green-500 h-5 w-5" />
                                        <span className="text-green-500 font-medium">
                                            Operational
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        <XCircle className="text-red-500 h-5 w-5" />
                                        <span className="text-red-500 font-medium">Down</span>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </main>
    )
}
