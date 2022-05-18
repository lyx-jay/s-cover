import { configureStore } from "@reduxjs/toolkit";
import toolsItemReducer from '../components/toolsItem/toolsItemSlice';
import logoReducer from '../components/logo/logoSlice';
import graphicReducer from '../components/graphicPanel/graphicPanelSlice';

export const store = configureStore({
  reducer: {
    toolsItemReducer,
    logoReducer,
    graphicReducer
  }
})

export type State = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;