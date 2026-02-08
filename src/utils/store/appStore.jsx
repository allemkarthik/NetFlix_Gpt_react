import { configureStore } from "@reduxjs/toolkit";
import userDataSliceReducer from "./userDataSlice";
import moviesReducer from "./movieListSlice"
import gptReducer from "./gptSlice";
import configReducer from "./configSlice"
const appStore=configureStore(
    {
        reducer:{
            user : userDataSliceReducer,
            movies:moviesReducer,
            gpt:gptReducer,
            config: configReducer,
            
        }
    }
)
export default appStore