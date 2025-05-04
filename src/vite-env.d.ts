/// <reference types="vite/client" />
export type CustomImportMetaEnv = ImportMetaEnv & {
    readonly VITE_BACKEND_URL: string
}