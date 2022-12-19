import {createSlice} from "@reduxjs/toolkit";

export interface MessageState {
    text: string,
    status: string,
    showMessage: boolean,
}

const initialState: MessageState = {
    text: '',
    status: 'info',
    showMessage: false,
}

export const MessageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        displayMessage: (state, action) => {
            state.text = action.payload.text
            state.showMessage = true
            state.status = 'info'
            if (action.payload.status !== undefined) {
                state.status = action.payload.status
            }
        },
        hideMessage: (state) => {
            state.text = ''
            state.status = 'info'
            state.showMessage = false
        }
    }
})

export const {displayMessage, hideMessage} = MessageSlice.actions

export default MessageSlice.reducer
