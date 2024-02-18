import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../store/store.ts";
import {ProductWithQuantity} from "../../../store/shopping-cart-slice/shopping-state.ts";
import {decreaseProductQuantity, removeProduct} from "../../../store/shopping-cart-slice/shopping-cart.slice.ts";
import {ShoppingCartState} from "../../../types/types.ts";

export const useShoppingCard = (): ShoppingCartState => {
    const {products, totalValue} = useSelector((state: RootState) => state.shoppingCart);
    const dispatch = useDispatch<AppDispatch>();


    const onDecreaseProductQuantity = (product: ProductWithQuantity): void => {
        if (product.quantity === 1) {
            onDeleteProduct(product);
            return;
        }
        dispatch(decreaseProductQuantity(product));
    }

    const onDeleteProduct = (product: ProductWithQuantity): void => {
        dispatch(removeProduct(product));
    }

    return {
        totalValue,
        products,
        onDecreaseProductQuantity,
        onDeleteProduct
    }
}