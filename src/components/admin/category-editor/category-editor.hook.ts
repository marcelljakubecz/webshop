import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../store/store.ts";
import {createNewCategory, getCategories} from "../../../store/products-slice/products.slice.ts";
import {useEffect, useState} from "react";
import {CategoryEditorState} from "../../../types/types.ts";

export const useCategoryEditor = (): CategoryEditorState => {
    const categories = useSelector((state: RootState) => state.products.categories);
    const dispatch = useDispatch<AppDispatch>();
    const [newCategoryName, setNewCategoryName] = useState<string>("");
    const [parent, setParent] = useState<string>("");

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    const onCategoryNameInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewCategoryName(e.target.value);
    }

    const onParentCategorySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setParent(e.target.value);
    }

    const onAddCategory = (): void => {
        if (!newCategoryName) {
            return;
        }
        dispatch(createNewCategory({
            parent,
            name: newCategoryName
        }));
        setNewCategoryName("");
        setParent("");
    }

    return {
        onAddCategory,
        onCategoryNameInputChange,
        onParentCategorySelect,
        categories,
        newCategoryName,
        parent
    }
}