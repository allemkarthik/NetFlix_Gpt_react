import { createSlice } from "@reduxjs/toolkit";

const movieListSlice=createSlice({
    name:"movieList",
    initialState:{
        nowPlayingMovies:null,
    },
    reducers:{
        addplayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        }
    }
})
export const {addplayingMovies}=movieListSlice.actions
export default movieListSlice.reducer;