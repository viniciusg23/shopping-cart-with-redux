import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import IProducts from "../../interfaces/product"

const INITIAL_STATE: IProducts[] = [];

const sliceCart= createSlice({
    name: "cart",
    initialState: INITIAL_STATE,
    reducers: {
        addCartItem(state, {payload}: PayloadAction<IProducts>){
            if(state.find(product => product.id === payload.id)){
                return [...state];
            }

            return [...state, payload];
        },
        removeCartItem(state, {payload}: PayloadAction<IProducts>){
            const updatedCart = state.filter(
                (product) => product.id !== payload.id
            );

            return updatedCart;
        }
    }
})

export default sliceCart.reducer;

export const { addCartItem, removeCartItem } = sliceCart.actions;

export const useCart = (state: any) => {
    return state.cart as IProducts[];
}