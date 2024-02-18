import './homepage.scss';
import {useHomepage} from "./homepage.hook.ts";
import {ProductView} from "./product-view/product-view.tsx";
import {CategoryView} from "./category-view/category-view.tsx";
import {ShoppingCart} from "./shopping-cart/shopping-cart.tsx";
import {SORT_OPTION} from "../../types/types.ts";
export const Homepage = (): React.ReactElement => {

    const {
        onFilterChange,
        filter,
        shouldDisplayProducts,
        setShouldDisplayProducts,
        onSortByChange,
        sortBy,
        isShoppingCartOpen,
        setIsShoppingCartOpen,
        windowInnerWidth,
        displayShoppingCart
    } = useHomepage();


    return <div className="homepage-container">
        {shouldDisplayProducts && <button onClick={() => setShouldDisplayProducts(false)}>back</button>}
        {!displayShoppingCart && <button className="shopping-cart-toggle" onClick={() => setIsShoppingCartOpen(true)}>cart</button>}
        <div className="filter-group">
            <input placeholder="filter" className="filter-input" id="filter" type="text" onChange={onFilterChange}/>
            {shouldDisplayProducts &&
                <div>
                    <label htmlFor="sortBy">sort by:</label>
                    <select id="sortBy" name="sortBy" className="sort-input" onChange={onSortByChange} value={sortBy}>
                        <option value={SORT_OPTION.nameAbc}>{SORT_OPTION.nameAbc}</option>
                        <option value={SORT_OPTION.nameCbe}>{SORT_OPTION.nameCbe}</option>
                        <option value={SORT_OPTION.priceHighest}>{SORT_OPTION.priceHighest}</option>
                        <option value={SORT_OPTION.priceLowest}>{SORT_OPTION.priceLowest}</option>
                    </select>
                </div>
            }
        </div>
        <div className="list">
            {shouldDisplayProducts ? <ProductView filter={filter} sortBy={sortBy}/> : <CategoryView/>}
        </div>
        {displayShoppingCart &&
            <ShoppingCart
                isShoppingCartOpen={isShoppingCartOpen}
                setIsShoppingCartOpen={setIsShoppingCartOpen}
                windowInnerWidth={windowInnerWidth}/>
        }
    </div>;
}