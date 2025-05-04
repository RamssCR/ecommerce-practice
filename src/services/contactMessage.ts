import type { ContactMessage } from '@localTypes/contactTypes'
import { backendInstance } from '@plugins/axios'

export const sendMessage = async (data: ContactMessage): Promise<unknown> => {
    const response = await backendInstance.post("/contact", data)
    return response?.data
}