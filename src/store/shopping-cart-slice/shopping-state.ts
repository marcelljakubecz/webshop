import {Product} from "../products-slice/products.state.ts";

export interface ProductWithQuantity extends Product{
    quantity: number;
}
interface ShoppingCartState {
    products: ProductWithQuantity[],
    totalValue: number;
}
export const shoppingCartInitialState: ShoppingCartState = {
    products: [],
    totalValue: 0
}