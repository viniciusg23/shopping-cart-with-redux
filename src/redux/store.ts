import { configureStore } from "@reduxjs/toolkit";
import sliceProducts from "./products/sliceProducts";

const store = configureStore({
    reducer: {
        products: sliceProducts,
    }
})

export default store;