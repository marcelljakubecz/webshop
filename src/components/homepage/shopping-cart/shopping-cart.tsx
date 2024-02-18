import './shopping-card.scss';
import {useShoppingCard} from "./shopping-card.hook.ts";
import {ShoppingCartProps} from "../../../types/types.ts";
export const ShoppingCart = ({setIsShoppingCartOpen, isShoppingCartOpen, windowInnerWidth}: ShoppingCartProps): React.ReactElement | null => {
    const {products, totalValue, onDeleteProduct, onDecreaseProductQuantity} = useShoppingCard();

    if (!products.length) {
        return null;
    }

    return <div className="shopping-cart-container">
        {windowInnerWidth < 600 &&
            <button className="shopping-cart-toggle" onClick={() => setIsShoppingCartOpen(!isShoppingCartOpen)}>
                close
            </button>
        }
        <div>
            {products.map(product =>
                <div key={product.name} className="product">
                    <div>
                        name: {product.name}
                    </div>
                    <div>
                        amount: {product.quantity}
                    </div>
                    <div>
                        price: {product.price}
                    </div>
                    <div className="action-group">
                        <button onClick={() => onDecreaseProductQuantity(product)}>
                            decrease
                        </button>
                        <button onClick={() => onDeleteProduct(product)}>
                            remove
                        </button>
                    </div>
                    <hr/>
                </div>
            )}
        </div>
        <div>
            total value: {totalValue}
        </div>
    </div>;
}