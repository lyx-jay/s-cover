import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {State} from '../../store';

type Item = {
  toolType: string
}

const initialState: Item = {
  toolType: ''
}

export const toolsItemSlice = createSlice({
  name: 'toolsItem',
  initialState,
  reducers: {
    toggleToolType: {
      reducer: (state, action: PayloadAction<Item>) => {
        state.toolType = action.payload.toolType
      },
      prepare: (toolType: string) => {
        return { payload: { toolType } }
      }
    }
  }
})

export const { toggleToolType } = toolsItemSlice.actions;

export const selectToolType = (state: State) => state.toolsItemReducer.toolType;

export default toolsItemSlice.reducer;
