

import {configureStore} from "@reduxjs/toolkit"

import productSlice from './Redux/ProductSlice';

const store = configureStore({
    reducer:
    {
       product:productSlice
        
    }
})

export default store