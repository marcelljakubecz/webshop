import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../store/store.ts";
import {addProduct} from "../../../store/shopping-cart-slice/shopping-cart.slice.ts";
import {Product} from "../../../store/products-slice/products.state.ts";
import {ProductItemState} from "../../../types/types.ts";

export const useProductItem = (): ProductItemState => {
    const dispatch = useDispatch<AppDispatch>();
    const onAddItemToShoppingCart = (product: Product): void => {
        dispatch(addProduct(product));
    }

    return {
        onAddItemToShoppingCart
    }
}