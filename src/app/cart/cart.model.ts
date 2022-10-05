import { ProductModel } from "../products/product.model"

export interface CartModel{
    cartId: number;
    product: ProductModel;
    price: number;
    quantity: number;
    user_id: number;
    }