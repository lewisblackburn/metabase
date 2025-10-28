'use server'

import { OKResponse, SignOutRequest } from '@nhost/nhost-js/auth'
import { FetchResponse } from '@nhost/nhost-js/fetch'

import { createNhostClient } from '@/lib/nhost/server'

export default async function logout(
    body: SignOutRequest,
    options?: RequestInit,
): Promise<FetchResponse<OKResponse>> {
    const nhost = await createNhostClient()
    const session = nhost.getUserSession()

    return nhost.auth.signOut(
        {
            ...body,
            refreshToken: session?.refreshToken,
        },
        options,
    )
}
