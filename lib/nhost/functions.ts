import { createServerClient } from '@nhost/nhost-js'

export function createNhostFunctionsClient() {
  return createServerClient({
    subdomain: process.env.NHOST_SUBDOMAIN!,
    region: process.env.NHOST_REGION!,
    storage: {
      get: () => null,
      set: () => { },
      remove: () => { }
    }
  })
}
