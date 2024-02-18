import {Category, ENTITY_TYPE, Product} from "../store/products-slice/products.state.ts";
import {ProductWithRoute, SORT_OPTION} from "../types/types.ts";
import {isRouteErrorResponse} from "react-router-dom";

export const getProducts = (products: Product[], filter: string, route: string): ProductWithRoute[] => {
    const result: ProductWithRoute[] = [];
    products.forEach(product => {
        if (product.type === ENTITY_TYPE.category) {
            result.push(...getProducts(product.children, filter, `${route} > ${product.name}`));
            return;
        }
        if (product.name.includes(filter)) {
            result.push({...product, route: route});
        }
    });
    return result;
}

export const compareByName = (products: ProductWithRoute[], sortBy: SORT_OPTION): ProductWithRoute[] => {
    return products.sort((a, b) => {
        if (sortBy === SORT_OPTION.nameAbc) {
            return a.name.localeCompare(b.name);
        }
        return b.name.localeCompare(a.name);
    });
}

export const compareByPrice = (products: ProductWithRoute[], sortBy: SORT_OPTION): ProductWithRoute[] => {
    return products.sort((a,b) => {
        if (!a.price || !b.price) {
            return -1;
        }
        return sortBy === SORT_OPTION.priceHighest ? b.price - a.price : a.price - b.price;
    });
}
export const getSortedProducts = (products: ProductWithRoute[], sortBy: SORT_OPTION): ProductWithRoute[] => {

    if (sortBy === SORT_OPTION.nameCbe || sortBy === SORT_OPTION.nameAbc) {
        return compareByName(products, sortBy);
    }

    return compareByPrice(products, sortBy);
}

export const getRouterErrorMessage = (error: unknown): string => {
    if (isRouteErrorResponse(error)) {
        return error.statusText;
    }
    if (error instanceof Error) {
        return error.message;
    }
    if (typeof error === 'string') {
        return error;
    }
    return 'unknown error';
}

export const addCategoryToTree = (products: Product[], newCategory: Category): Product[] => {
    const parentCategoryInTree = products.find(product => product.name === newCategory.parent && product.type === ENTITY_TYPE.product);

    if (parentCategoryInTree) {
        parentCategoryInTree.children.push({name: newCategory.name, children: [], type: ENTITY_TYPE.category});
        return products;
    }

    products.map(product => {
        return addCategoryToTree(product.children, newCategory);
    });

    return products;
}