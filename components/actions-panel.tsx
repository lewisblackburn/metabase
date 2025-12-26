import { EllipsisIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { matchRoute } from '@/lib/helpers/strings/strings'
import { useAuthStore } from '@/lib/stores/auth.store'

import ImportDialog from './import-dialog'

export default function ActionsPanel() {
    const pathname = usePathname()
    const user = useAuthStore(s => s.user)
    const isAdmin = user?.roles.includes('admin')
    const [importDialogOpen, setImportDialogOpen] = useState(false)

    const isMediaPage = matchRoute(pathname, ['/:route/:id'])

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon-sm">
                        <EllipsisIcon />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-66">
                    <DropdownMenuGroup>
                        <DropdownMenuItem onClick={() => setImportDialogOpen(true)}>
                            Import<DropdownMenuShortcut>⌘ + I</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        {isMediaPage && (
                            <DropdownMenuItem asChild>
                                <Link href={`${pathname}/edit`}>
                                    Edit<DropdownMenuShortcut>⌘ + E</DropdownMenuShortcut>
                                </Link>
                            </DropdownMenuItem>
                        )}
                        {isMediaPage && isAdmin && (
                            <>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={() => {}}>
                                    Delete <DropdownMenuShortcut>⌘ + D</DropdownMenuShortcut>
                                </DropdownMenuItem>
                            </>
                        )}
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
            <ImportDialog open={importDialogOpen} onOpenChange={setImportDialogOpen} />
        </>
    )
}
