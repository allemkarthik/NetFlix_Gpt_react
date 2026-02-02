import { configureStore } from "@reduxjs/toolkit";
import userDataSliceReducer from "./userDataSlice";
import moviesReducer from "./movieListSlice"
const appStore=configureStore(
    {
        reducer:{
            user : userDataSliceReducer,
            movies:moviesReducer,
        }
    }
)
export default appStore