import { createClient } from '@sanity/client'

export const sanityClient = createClient({
    projectId: 'e22ks1zy',
    dataset: 'production',
    apiVersion: '2023-06-08',
    useCdn: true,
})
