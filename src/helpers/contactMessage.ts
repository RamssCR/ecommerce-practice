import type { ContactMessage } from '@localTypes/contactTypes'

export const sendMessage = (data: ContactMessage): Promise<unknown> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (data.name && data.email && data.message) {
                resolve({ code: 'message_sent', status: 'success', message: 'Message sent successfully!' })
            } else {
                reject({ code: 'field_error', status: 'error', message: 'Failed to send message. Please try again.' })
            }
        }, 1000)
    })

}