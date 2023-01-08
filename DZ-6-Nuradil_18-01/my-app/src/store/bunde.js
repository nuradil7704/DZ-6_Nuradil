import { configureStore } from "@reduxjs/toolkit";
import titleReducer from "./titleReducer"

export default configureStore({
    reducer:{
        titleReducer
    }
})