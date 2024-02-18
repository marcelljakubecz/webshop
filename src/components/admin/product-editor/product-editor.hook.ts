import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../store/store.ts";
import {createNewProduct} from "../../../store/products-slice/products.slice.ts";
import {ProductEditorState, ProductForm} from "../../../types/types.ts";


export const useProductEditor = (): ProductEditorState => {
    const categories = useSelector((state: RootState) => state.products.categories);
    const dispatch = useDispatch<AppDispatch>();
    const [productForm, setProductFrom] = useState<ProductForm>({
        name: '',
        parent: '',
        price: 0
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
        const { name, value } = event.target;
        setProductFrom({
            ...productForm,
            [name]: value
        })

    }

    const handleOnCreateProduct = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        if (!productForm.name || !productForm.price || !productForm.parent) {
            return;
        }
        dispatch(createNewProduct(productForm));
        setProductFrom({parent: '', price: 0, name: ''});
    }

    return {
        handleInputChange,
        productForm,
        categories,
        handleOnCreateProduct
    }
}