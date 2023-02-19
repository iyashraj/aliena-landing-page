import { createSlice } from "@reduxjs/toolkit";     

const initialState = {
    isAuthUser: false,
    useAuth: {},
} 

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loggedIn : (state) => {
            state.isAuthUser = true;
        },
        loggedOut : (state)=>{
            state.isAuthUser = false;
        }
    }
})
console.log(authSlice)

export const {loggedIn, loggedOut} = authSlice.actions
export default authSlice.reducer;