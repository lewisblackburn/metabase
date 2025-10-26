"use server"

import { createNhostClient } from "@/lib/nhost/server";
import { SignInEmailPasswordRequest, SignInEmailPasswordResponse } from "@nhost/nhost-js/auth";
import { FetchResponse } from "@nhost/nhost-js/fetch";

export async function login({ email, password }: SignInEmailPasswordRequest): Promise<FetchResponse<SignInEmailPasswordResponse>> {
	const nhost = await createNhostClient();

	return nhost.auth.signInEmailPassword({
		email,
		password
	})
}