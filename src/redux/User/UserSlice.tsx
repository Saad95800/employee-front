import { createSlice } from '@reduxjs/toolkit'
import { fetchEmployees } from '../../api/UserAPI';
// import {getUserByToken, loginUser} from '../../api/UserAPI'

export interface userState {
    username: string,
    connected: boolean,
    page: string
}

const initialState: userState = {
    username: '',
    connected: true,
    page: 'login'
}

export const userSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
      deconnectUser: (state) => {
        sessionStorage.removeItem('token_user_employee');
        state.page = 'login'
        state.connected = false;
        state.username = '';
      },
      setPage: (state, action) => {
        state.page = action.payload;
      }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchEmployees.fulfilled, (state) => {
                console.log('hello')
            })
    },
})

export const { deconnectUser, setPage } = userSlice.actions

export default userSlice.reducer
