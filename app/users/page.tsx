import { Suspense } from 'react'

import { Users } from '@/app/users/components/users'

import UsersSkeleton from './components/users-skeleton'

export default function UsersPage() {
  return (
    <div>
      bla bla bla content here
      <Suspense fallback={<UsersSkeleton />}>
        <Users />
      </Suspense>
    </div>
  )
}
