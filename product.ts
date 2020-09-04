export class Product {
    productName: string
    price: number
    description: string
    tags: [string]
    category: string
    quantity: number
    returnable: string
}

export class Products {
    products: [Product]
    constructor(products: Object) {
        Object.assign(this, products)
    }
}
