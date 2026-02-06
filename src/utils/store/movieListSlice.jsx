import { createSlice } from "@reduxjs/toolkit";

const movieListSlice=createSlice({
    name:"movieList",
    initialState:{
        nowPlayingMovies:null,
        nowPlayingTrailer:null,
        popularMovies:null,
        topRatedMovies:null,
        upComingMovies:null,
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
        
        addUpcomingMovies:(state,action)=>{
            state.upComingMovies=action.payload;
        },
        

        addTrailerVideo: (state,action)=>{
            state.nowPlayingTrailer=action.payload
        }
    }
})
export const {addplayingMovies, addTrailerVideo, addPopularMovies,addTopratedMovies, addUpcomingMovies}=movieListSlice.actions
export default movieListSlice.reducer;