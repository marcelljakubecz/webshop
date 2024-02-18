import './product-view.scss';
import {useProductView} from "./product-view.hook.ts";
import React from "react";
import {ProductItem} from "../product-item/product-item.tsx";
import {ProductViewProps} from "../../../types/types.ts";

export const ProductView = ({filter, sortBy}: ProductViewProps): React.ReactElement => {
    const {products, isLoading} = useProductView({filter, sortBy});

    if (isLoading) {
        return <>Loading...</>
    }

    return <div>
        {products.map(product =>
            <ProductItem key={product.name} product={product} />
        )}
    </div>;
}