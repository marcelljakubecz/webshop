import {Category, Product} from "../store/products-slice/products.state.ts";
import {ProductWithQuantity} from "../store/shopping-cart-slice/shopping-state.ts";
import React from "react";

export interface HttpResponse<T> {
    status: number;
    message: string;
    data: T;
}

export interface ShoppingCartProps {
    windowInnerWidth: number;
    isShoppingCartOpen: boolean,
    setIsShoppingCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface HomePageState {
    onFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    filter: string;
    shouldDisplayProducts: boolean;
    setShouldDisplayProducts: React.Dispatch<React.SetStateAction<boolean>>;
    onSortByChange: (e:  React.ChangeEvent<HTMLSelectElement> | undefined) => void;
    sortBy: SORT_OPTION;
    windowInnerWidth: number;
    isShoppingCartOpen: boolean,
    setIsShoppingCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
    displayShoppingCart: boolean;
}

export enum SORT_OPTION {
    nameAbc = "name abc",
    nameCbe = "name cbe",
    priceLowest = "price lowest first",
    priceHighest = "price highest first"
}

export interface CategoryListState {
    onClick: (product: Product) => void;
    closedCategories: Product[];
}

export interface ProductListProps {
    products: Product[];
    route: string;
}

export interface ProductWithRoute extends Product {
    route: string;
}
export interface ProductItemProps {
    product: ProductWithRoute;
}

export interface ProductItemState {
    onAddItemToShoppingCart: (product: Product) => void;
}

export interface ProductViewProps {
    filter: string;
    sortBy: SORT_OPTION
}

export interface CategoryViewState {
    products: Product[]
    isLoading: boolean;
}

export interface ProductViewState {
    products: ProductWithRoute[];
    isLoading: boolean;
}

export interface ProductViewProps {
    filter: string;
    sortBy: SORT_OPTION
}

export interface ShoppingCartState {
    products: ProductWithQuantity[],
    totalValue: number,
    onDecreaseProductQuantity: (product: ProductWithQuantity) => void,
    onDeleteProduct: (product: ProductWithQuantity) => void;
}

export interface ProductForm {
    parent: string;
    price: number;
    name: string;
}

export interface ProductEditorState {
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    handleOnCreateProduct: (event: React.FormEvent<HTMLFormElement>) => void;
    productForm: ProductForm;
    categories: Category[];
}

export interface CategoryEditorState {
    onAddCategory: () => void;
    onCategoryNameInputChange : (e: React.ChangeEvent<HTMLInputElement>) => void;
    onParentCategorySelect : (e: React.ChangeEvent<HTMLSelectElement>) => void;
    categories: Category[];
    newCategoryName: string;
    parent: string;
}

export interface AddNewProductPayload {
    name: string,
    price: number,
    parent: string
}