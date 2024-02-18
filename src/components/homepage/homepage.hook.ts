import {useEffect, useState} from "react";
import {HomePageState, SORT_OPTION} from "../../types/types.ts";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store.ts";

export const useHomepage = (): HomePageState => {
    const [filter, setFilter] = useState<string>('');
    const [shouldDisplayProducts, setShouldDisplayProducts] = useState<boolean>(false);
    const [sortBy, setSortBy] = useState<SORT_OPTION>(SORT_OPTION.nameAbc);
    const [isShoppingCartOpen, setIsShoppingCartOpen] = useState<boolean>(true);
    const [windowInnerWidth, setWindowInnerWidth] = useState<number>(window.innerWidth);
    const {products} = useSelector((state: RootState) => state.shoppingCart);

    useEffect(() => {
        const handleResize = (): void => {
            setWindowInnerWidth(window.innerWidth);
            setIsShoppingCartOpen(true);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const onFilterChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setShouldDisplayProducts(!!e.target.value);
        setFilter(e.target.value)
    }

    const onSortByChange = (e:  React.ChangeEvent<HTMLSelectElement> | undefined): void => {
        setSortBy(e?.target.value as SORT_OPTION);
    }

    if (windowInnerWidth < 600 && isShoppingCartOpen && !!products.length) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = ''
    }

    return {
        onFilterChange,
        filter,
        shouldDisplayProducts,
        setShouldDisplayProducts,
        onSortByChange,
        sortBy,
        isShoppingCartOpen,
        setIsShoppingCartOpen,
        windowInnerWidth,
        displayShoppingCart: windowInnerWidth > 600 || isShoppingCartOpen
    }
}