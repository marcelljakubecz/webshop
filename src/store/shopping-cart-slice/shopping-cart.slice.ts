import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ProductWithQuantity, shoppingCartInitialState} from "./shopping-state.ts";
import {Product} from "../products-slice/products.state.ts";

const getTotalValue = (products: ProductWithQuantity[]): number => {
    return products.reduce((accumulator, product) => {
        if (!product.price) {
            return accumulator;
        }
        return accumulator + (product.price * product.quantity);
    }, 0)
}

const shoppingCartSlice = createSlice({
    name: "shoppingCart",
    initialState: shoppingCartInitialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            const selectedProductInState = state.products.find(product => product.name === action.payload.name);
            if (selectedProductInState) {
                selectedProductInState.quantity += 1;
            } else {
                state.products.push({...action.payload, quantity: 1})
            }
            state.totalValue = getTotalValue(state.products);
        },
        decreaseProductQuantity: (state, action: PayloadAction<ProductWithQuantity>) => {
            const productInShoppingCart = state.products.find(product => product.name === action.payload.name);
            if (productInShoppingCart) {
                productInShoppingCart.quantity -= 1
                state.totalValue = getTotalValue(state.products);
            }
        },
        removeProduct: (state, action: PayloadAction<ProductWithQuantity>) => {
            state.products = state.products.filter(product => product.name !== action.payload.name);
            state.totalValue = getTotalValue(state.products);
        },
    }
});

export const {addProduct, decreaseProductQuantity, removeProduct} = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;