import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Category, ENTITY_TYPE, Product, productsInitialState} from "./products.state.ts";
import {AddNewProductPayload, HttpResponse} from "../../types/types.ts";
import {
    addNewCategoryRoute,
    addNewProductRoute,
    apiResourceUrl,
    getCategoriesRoute,
    getProductsRoute
} from "../../const/const.ts";
import {pushError} from "../error-slice/error.slice.ts";
import {addCategoryToTree} from "../../utils/utils.ts";

const productsSlice = createSlice({
    name: "product",
    initialState: productsInitialState,
    reducers: {
        updateClosedCategories: (state, action: PayloadAction<Product>) => {
            if (state.closedCategories.some(closedCategory => closedCategory.name === action.payload.name)) {
                state.closedCategories = state.closedCategories.filter(closedCategory => closedCategory.name !== action.payload.name);
                return;
            }
            state.closedCategories.push(action.payload);
        },
        addNewProduct: (state, action: PayloadAction<Product>) => {
            state.products.push(action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCategories.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCategories.fulfilled, (state, action) => {
                state.categories = action.payload;
                state.isLoading = false;
            })
            .addCase(getProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getProducts.fulfilled, (state, action ) => {
                state.isLoading = false;
                state.products = action.payload;
            })
            .addCase(createNewProduct.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createNewProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                const { name, price} = action.payload;
                state.products.push({name, price, children: [], type: ENTITY_TYPE.product})
            })
            .addCase(createNewCategory.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createNewCategory.fulfilled, (state, action) => {
                state.isLoading = false;
                state.products = addCategoryToTree([...state.products], action.payload);
                state.categories.push(action.payload);
            })
    }
});

export const getCategories = createAsyncThunk(
    "product/getCategories",
    async (_, {dispatch}): Promise<Category[]> => {
        try {
            const result = await fetch(`${apiResourceUrl}${getCategoriesRoute}`);
            const data: HttpResponse<Category[]> = await result.json();
            return data.data;
        } catch (error) {
            dispatch(pushError("failed to get categories"));
            throw error;
        }
    }
);
export const getProducts = createAsyncThunk(
    "product/getProducts",
    async (_,{dispatch}): Promise<Product[]> => {
        try {
            const result = await fetch(`${apiResourceUrl}${getProductsRoute}`);
            const data: HttpResponse<Product[]> = await result.json();
            return data.data;
        } catch (error) {
            dispatch(pushError("failed to fetch products"));
            throw error;
        }
    }
);

export const createNewProduct = createAsyncThunk(
    "product/createNewProduct",
    async (product: AddNewProductPayload, {dispatch}): Promise<AddNewProductPayload> => {
        try {
            await fetch(`${apiResourceUrl}${addNewProductRoute}`, {method: "POST", headers: {'content-type': 'application/json'}, body: JSON.stringify(product)});
            return product;
        } catch (error) {
            dispatch(pushError("failed to create new product"))
            throw error;
        }
    }
);

export const createNewCategory = createAsyncThunk(
    "product/createNewCategory",
    async (category: Category, {dispatch}): Promise<Category> => {
        try {
            await fetch(`${apiResourceUrl}${addNewCategoryRoute}`, {method: "POST", headers: {'content-type': 'application/json'}, body: JSON.stringify(category)});
            return category;
        } catch (error) {
            dispatch(pushError("failed to create new category"))
            throw error;
        }
    }
)

export const {updateClosedCategories, addNewProduct} = productsSlice.actions;
export default productsSlice.reducer;