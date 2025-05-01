export type ProductProps = {
    readonly id: string
    category: string
    description: string
    discount: number
    image: string
    isNew: boolean
    name: string
    slug: string
    price: number
    rating?: number
    tax: number
}

export type CartItemProps = ProductProps & {
    cover: boolean
    quantity: number
    total: number
    bookmarked: boolean
}