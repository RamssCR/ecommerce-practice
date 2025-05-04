import axios, { type RawAxiosRequestConfig } from 'axios'
import { VITE_BACKEND_URL } from '@utils/env.config'

/**
 * Creates an Axios instance with a specified base URL and default headers.
 */
const axiosInstance = (baseURL: string, options?: Omit<RawAxiosRequestConfig, 'baseURL' | 'timeout'>) => axios.create({
    baseURL,
    timeout: 10000,
    headers: {
        ...options?.headers,
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
    ...options
})

export const backendInstance = axiosInstance(VITE_BACKEND_URL)
export const localInstance = axiosInstance('/api')