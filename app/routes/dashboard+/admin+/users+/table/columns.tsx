import { type User } from '@prisma/client'
import { type ColumnDef } from '@tanstack/react-table'
import { DataTableColumnHeader } from '#app/components/table/data-table-column-header.js'
import { Checkbox } from '#app/components/ui/checkbox.tsx'

export const columns: ColumnDef<Pick<User, 'id' | 'username'>>[] = [
	{
		id: 'select',
		header: ({ table }) => (
			<Checkbox
				checked={table.getIsAllPageRowsSelected()}
				onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
				aria-label="Select all"
				className={
					table.getIsAllPageRowsSelected()
						? 'translate-y-[4px]'
						: '-translate-y-[2px]'
				}
			/>
		),
		cell: ({ row }) => (
			<Checkbox
				checked={row.getIsSelected()}
				onCheckedChange={(value) => row.toggleSelected(!!value)}
				aria-label="Select row"
				className={
					row.getIsSelected() ? 'translate-y-[4px]' : '-translate-y-[2px]'
				}
			/>
		),
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: 'username',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Username" />
		),
		cell: ({ row }) => <span>{row.getValue('username')}</span>,
	},
]
