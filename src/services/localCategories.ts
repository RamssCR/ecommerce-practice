import { localInstance } from '@plugins/axios'

/**
 * Retrieves the list of categories from a local JSON file.
 */
export const getCategories = async (): Promise<unknown> => {
    const response = await localInstance.get('/filters-categories.json')
    return response?.data
}