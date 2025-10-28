import { User } from '@nhost/nhost-js/auth'
import { create } from 'zustand'

// ! TODO: security issue given user type?

type AuthenticatedState = {
    isAuthenticated: true
    user: User
}

type UnauthenticatedState = {
    isAuthenticated: false
    user: undefined
}

export type AuthState = (AuthenticatedState | UnauthenticatedState) & {
    setUser: (user: AuthenticatedState['user'] | undefined) => void
}

export const useAuthStore = create<AuthState>(set => ({
    user: undefined,
    isAuthenticated: false,
    setUser: user =>
        set(user ? { user, isAuthenticated: true } : { user: undefined, isAuthenticated: false }),
}))
