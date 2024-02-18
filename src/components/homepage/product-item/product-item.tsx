import {ENTITY_TYPE} from "../../../store/products-slice/products.state.ts";
import React from "react";
import {useProductItem} from "./product-item.hook.ts";
import {ProductItemProps} from "../../../types/types.ts";

import './product-item.scss';

export const ProductItem = ({product}: ProductItemProps): React.ReactElement => {
    const {onAddItemToShoppingCart} = useProductItem();

    return (<div className={`product-item-container ${product.type === ENTITY_TYPE.category ? "category" : ""}`}>
        <div>
            category: {product.route}
        </div>
        <div>
            name: {product.name}
        </div>
        {product.type === ENTITY_TYPE.product &&
            <>
                <span>
                    price: <span>{product.price}</span>
                </span>
                <div>
                    <button onClick={() => onAddItemToShoppingCart(product)}>add</button>
                </div>
            </>
        }
    <hr/>
</div>)
}