import {useSelector} from "react-redux";
import {RootState} from "../../../store/store.ts";
import {ProductViewProps, ProductViewState} from "../../../types/types.ts";
import {getProducts, getSortedProducts} from "../../../utils/utils.ts";

export const useProductView = ({filter, sortBy}: ProductViewProps): ProductViewState => {
    const {products, isLoading} = useSelector((state: RootState) => state.products);

    return {
        isLoading, products: getSortedProducts(getProducts(products, filter, ''), sortBy)
    }
}