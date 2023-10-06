import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice';
import userNameReducer from './userNameSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    userName: userNameReducer
  },
})

