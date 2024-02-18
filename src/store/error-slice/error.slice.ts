import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {errorInitialState} from "./error.state.ts";

const errorSlice = createSlice({
    name: "error",
    initialState: errorInitialState,
    reducers: {
        pushError: (state, action: PayloadAction<string>) => {
            state.hasError = true;
            state.errorMessage = action.payload;
        }
    }
})

export const {pushError} = errorSlice.actions;
export default errorSlice.reducer;