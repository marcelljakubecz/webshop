import {ENTITY_TYPE, Product} from "../../../store/products-slice/products.state.ts";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../store/store.ts";
import {updateClosedCategories} from "../../../store/products-slice/products.slice.ts";
import {CategoryListState} from "../../../types/types.ts";

export const useCategoryList = (): CategoryListState => {
    const {closedCategories} = useSelector((selector: RootState) => selector.products);
    const dispatch = useDispatch<AppDispatch>();
    const onClick = (product: Product): void => {
        if (product.type === ENTITY_TYPE.category) {
            dispatch(updateClosedCategories(product));
        }
    }

    return {
        closedCategories,
        onClick
    }
}