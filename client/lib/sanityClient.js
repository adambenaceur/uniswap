import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: '8846gt26',
    dataset: 'production',
    apiVersion: 'v1',
    token: 'skpvci1EOucYIIRChBHc9WZh32Yw79ti5uOnVC0FxHTf2CrrjpPuUxblWk8HqOAR7B8V1hUbcXexz12tLdpnrVKBTuOsqYxoZynAAYERGdfal6CKodqUZmemACNnznuDdeXFkgd0lAGCmz8bgkDwpDxkkhAYUr0TWrghZvmWe6drTU7jtGhb',
    useCdn: false,
})