import { createSlice } from "@reduxjs/toolkit";

const movieListSlice=createSlice({
    name:"movieList",
    initialState:{
        nowPlayingMovies:null,
        nowPlayingTrailer:null,
    },
    reducers:{
        addplayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },

        addTrailerVideo: (state,action)=>{
            state.nowPlayingTrailer=action.payload
        }
    }
})
export const {addplayingMovies, addTrailerVideo}=movieListSlice.actions
export default movieListSlice.reducer;