import { type LoaderFunctionArgs } from '@remix-run/node'
import { json, useLoaderData, type MetaFunction } from '@remix-run/react'
import { prisma } from '#app/utils/db.server.ts'
import { requireUserWithRole } from '#app/utils/permissions.server.ts'
import { columns } from './table/columns'
import { UserTable } from './table/table'

export async function loader({ request }: LoaderFunctionArgs) {
	await requireUserWithRole(request, 'admin')

	const users = await prisma.user.findMany()

	return json({ users })
}

export default function DashboardAdminUsersPage() {
	const { users } = useLoaderData<typeof loader>()

	return (
		<div className="flex flex-col">
			<UserTable data={users} columns={columns} />
		</div>
	)
}

export const meta: MetaFunction = () => [{ title: 'Users Table | Metabase' }]
