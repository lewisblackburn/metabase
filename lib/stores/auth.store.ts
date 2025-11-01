import { User } from '@nhost/nhost-js/auth'
import { create } from 'zustand'

import { createLogger } from '@/lib/helpers/logger'

const logger = createLogger('AuthStore')

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
    setUser: user => {
        if (user) {
            logger.info('User authenticated', { userId: user.id })
            set({ user, isAuthenticated: true })
        } else {
            logger.info('User logged out')
            set({ user: undefined, isAuthenticated: false })
        }
    },
}))
