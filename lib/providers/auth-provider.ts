'use client'

import { User } from '@nhost/nhost-js/auth'
import { useEffect } from 'react'

import { useAuthStore } from '../stores/auth.store'

export function AuthHydration({ user }: { user: User | undefined }) {
    const setUser = useAuthStore(s => s.setUser)

    useEffect(() => {
        setUser(user)
    }, [user, setUser])

    return null
}
