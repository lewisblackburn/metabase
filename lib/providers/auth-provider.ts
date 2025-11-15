'use client'

import { User } from '@nhost/nhost-js/auth'
import { useMemo } from 'react'

import { useAuthStore } from '../stores/auth.store'

export function AuthHydration({ user }: { user: User | undefined }) {
    const setUser = useAuthStore(s => s.setUser)

    // use memo to prevent re-rendering when the user is the same
    useMemo(() => setUser(user), [user, setUser])

    return null
}
