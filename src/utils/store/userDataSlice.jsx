import { createSlice } from "@reduxjs/toolkit";

const userDataSlice= createSlice({
    name: 'user',
    initialState: null,
    reducers:{
        addUser:(state, action)=>{
            return action.payload
        },
        removerUser: (state, action)=>{
            return null;
        }
    }
})
export const {addUser, removerUser}=userDataSlice.actions;
export default userDataSlice.reducer;