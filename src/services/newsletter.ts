import { backendInstance } from '@plugins/axios'

/**
 * Subscribe a user to the newsletter by sending a POST request to the backend.
 */
export const subscribeToNewsletter = async (email: string) => 
    await backendInstance.post('/newsletter/subscribe', { email })