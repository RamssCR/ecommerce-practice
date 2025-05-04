/**
 * Subscribe to a newsletter with the given email address.
 */
export const subscribeToNewsletter = ({ email = "" }) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email.includes('@')) {
                resolve({ status: 'success', code: 'email_sent', message: 'Your email was registered successfully!' })
            } else {
                reject({ status: 'error', code: 'invalid_email', message: 'Invalid email address!' })
            }
        }, 1000)
    })
}