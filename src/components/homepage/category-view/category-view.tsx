import './category-view.scss';
import {useCategoryView} from "./category-view.hook.ts";
import React from "react";
import {CategoryList} from "../category-list/category-list.tsx";

export const CategoryView = (): React.ReactElement => {
    const {products,isLoading} = useCategoryView();
    if (isLoading) {
        return <>Loading...</>
    }

    return <div className="product-view-container">
        <CategoryList products={products} route='' />
    </div>;
}