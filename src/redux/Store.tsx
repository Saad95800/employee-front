import { configureStore } from '@reduxjs/toolkit'
import MessageReducer from './Message/MessageSlice'
import EmployeeReducer from './Employee/EmployeeSlice'

export const store = configureStore({
  reducer: {
    message: MessageReducer,
    employee: EmployeeReducer,
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
