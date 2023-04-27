
import { configureStore } from "@reduxjs/toolkit"
import AuthSlice from "./AuthSlice"

import CounterSlice from "./CounterSlice"
import CartSlice from "./CartSlice"




const store=configureStore({
    reducer:{
        auth:AuthSlice.reducer,
        counter:CounterSlice.reducer,
        cart:CartSlice
     
    }
})

export default store