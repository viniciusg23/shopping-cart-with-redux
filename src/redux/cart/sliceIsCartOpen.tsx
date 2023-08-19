import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE: boolean = false;

const sliceCart= createSlice({
    name: "isCartOpen",
    initialState: INITIAL_STATE,
    reducers: {
        closeCart(){
            return false;
        },
        openCart(){
            return true;
        }
    }
})

export default sliceCart.reducer;

export const { openCart, closeCart } = sliceCart.actions;

export const useIsCartOpen = (state: any) => {
    return state.isCartOpen as boolean;
}