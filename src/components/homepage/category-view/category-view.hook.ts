import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../store/store.ts";
import {useEffect} from "react";
import {getProducts} from "../../../store/products-slice/products.slice.ts";
import {CategoryViewState} from "../../../types/types.ts";

export const useCategoryView = (): CategoryViewState => {
    const dispatch = useDispatch<AppDispatch>();
    const {products, isLoading} = useSelector((state: RootState) => state.products);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return {
        products,
        isLoading
    }
}