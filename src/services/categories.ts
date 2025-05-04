import { backendInstance } from '@plugins/axios'

/**
 * Retrieves the list of categories from the backend API.
 */
export const getCategories = async (): Promise<unknown> => {
    const response = await backendInstance.get('/filters-categories')
    return response?.data
}