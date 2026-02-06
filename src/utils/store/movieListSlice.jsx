import { createSlice } from "@reduxjs/toolkit";

const movieListSlice=createSlice({
    name:"movieList",
    initialState:{
        nowPlayingMovies:null,
        nowPlayingTrailer:null,
        popularMovies:null,
        topRatedMovies:null,
    },
    reducers:{
        addplayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload;
        },
        addTopratedMovies:(state,action)=>{
            state.topRatedMovies=action.payload;
        },
        

        addTrailerVideo: (state,action)=>{
            state.nowPlayingTrailer=action.payload
        }
    }
})
export const {addplayingMovies, addTrailerVideo, addPopularMovies,addTopratedMovies}=movieListSlice.actions
export default movieListSlice.reducer;