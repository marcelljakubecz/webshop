export enum ENTITY_TYPE {
    category = 'CATEGORY',
    product = 'PRODUCT'
}
export interface ProductsState {
    isLoading: boolean;
    products: Product[];
    closedCategories: Product[];
    categories: Category[]
}

export interface Product {
    type: ENTITY_TYPE,
    name: string,
    price?: number,
    children: Product[]
}

export interface Category {
    name: string;
    parent: string;
}

export const productsInitialState: ProductsState = {
    isLoading: false,
    products: [],
    categories: [],
    closedCategories: [],
};