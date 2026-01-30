import { configureStore } from "@reduxjs/toolkit";
import userDataSliceReducer from "./userDataSlice";
const appStore=configureStore(
    {
        reducer:{
            user : userDataSliceReducer,
        }
    }
)
export default appStore