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
    salePrice: number
    rating: number
    tax: number
    bookmarked: boolean
}

export type CartItemProps = ProductProps & {
    quantity: number
    total: number
}