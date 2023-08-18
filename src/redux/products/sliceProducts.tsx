import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import IProducts from "../../interfaces/product"

const INITIAL_STATE: IProducts[] = [];

const sliceProducts = createSlice({
    name: "products",
    initialState: INITIAL_STATE,
    reducers: {
        updateProducts(state, {payload}: PayloadAction<IProducts[]>){
            return payload;
        }
    }
})

export default sliceProducts.reducer;

export const { updateProducts } = sliceProducts.actions;

export const useProducts = (state: any) => {
    return state.products as IProducts[];
}