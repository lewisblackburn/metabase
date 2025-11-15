'use client'

import { User } from '@nhost/nhost-js/auth'
import { useEffect, useRef } from 'react'

import { useAuthStore } from '../stores/auth.store'

export function AuthHydration({ user }: { user: User | undefined }) {
    const setUser = useAuthStore(s => s.setUser)

    // use ref to store the previous user id from previous render
    const prevUserIdRef = useRef<string | undefined>(user?.id)

    // only update the user when the user id changes to avoid unnecessary re-renders
    useEffect(() => {
        if (prevUserIdRef.current !== user?.id) {
            setUser(user)
        }
        prevUserIdRef.current = user?.id
    }, [user, setUser])
    return null
}
