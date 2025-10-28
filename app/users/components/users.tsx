import { UsersDocument, UsersQuery, UsersQueryVariables } from '@/generated/graphql'
import { createNhostClient } from '@/lib/nhost/server'

export const Users = async () => {
    const nhost = await createNhostClient()
    const users = await nhost.graphql.request<UsersQuery, UsersQueryVariables>(UsersDocument)

    console.log(users)

    return (
        <div>
            <h1>Users</h1>
            <pre>{JSON.stringify(users, null, 2)}</pre>
        </div>
    )
}
