type FilterItem = {
    readonly id: string
    name: string
    checked: boolean
}

export type FilterRecord = Record<string, FilterItem[]>

export type FilterProps = {
    className?: string
    filters: Record<string, FilterItem[]>
    loading?: boolean
}