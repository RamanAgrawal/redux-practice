import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    isLoggedIn: false
}
const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state) => {
            state.isLoggedIn = true
        },
        logout: (state) => {
            state.isLoggedIn = false
        }
    }
})
export const AuthAction = AuthSlice.actions
export default AuthSlice