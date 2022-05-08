import { configureStore } from "@reduxjs/toolkit";
import toolsItemReducer from '../components/toolsItem/toolsItemSlice'

export const store = configureStore({
  reducer: {
    toolsItemReducer
  }
})

export type State = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;