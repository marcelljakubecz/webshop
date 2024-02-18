import {configureStore} from "@reduxjs/toolkit";
import productsSlice from "./products-slice/products.slice.ts";
import errorSlice from "./error-slice/error.slice.ts";
import shoppingCartSlice from "./shopping-cart-slice/shopping-cart.slice.ts";


export const store = configureStore({
    reducer: {
        products: productsSlice,
        error: errorSlice,
        shoppingCart: shoppingCartSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;