import React from "react";
import {ProductItem} from "../product-item/product-item.tsx";
import {useCategoryList} from "./category-list.hook.ts";
import {ProductListProps} from "../../../types/types.ts";

export const CategoryList = ({products, route}: ProductListProps): React.ReactElement => {
    const {onClick, closedCategories} = useCategoryList();

    return <div>
        {products.map(product =>
            <div key={product.name} className="product-container">
                <span onClick={() => onClick(product)}>
                    <ProductItem product={{...product, route}} />
                </span>
                {product.children && !closedCategories.some(closedCategory => closedCategory.name === product.name) && <CategoryList products={product.children} route={`${route} > ${product.name}`} />}
            </div>
        )}
    </div>
}