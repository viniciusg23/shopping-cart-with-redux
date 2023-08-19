import { configureStore } from "@reduxjs/toolkit";
import sliceProducts from "./products/sliceProducts";
import sliceCart from "./cart/sliceCart";
import sliceIsCartOpen from "./cart/sliceIsCartOpen";

const store = configureStore({
    reducer: {
        products: sliceProducts,
        cart: sliceCart,
        isCartOpen: sliceIsCartOpen
    }
})

export default store;