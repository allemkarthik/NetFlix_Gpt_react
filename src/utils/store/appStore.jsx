import { configureStore } from "@reduxjs/toolkit";
import userDataSliceReducer from "./userDataSlice";
import moviesReducer from "./movieListSlice"
import gptReducer from "./gptSlice";
const appStore=configureStore(
    {
        reducer:{
            user : userDataSliceReducer,
            movies:moviesReducer,
            gpt:gptReducer,
            
        }
    }
)
export default appStore