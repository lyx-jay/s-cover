import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {State} from '../../store';

type GraphicPropertyType = {
  propertyValue: string | number;
  propertyName: string;
}

const initialState: GraphicPropertyType = {
  propertyValue: '',
  propertyName: ''
}

export const graphicSlice = createSlice({
  name: 'graphic',
  initialState,
  reducers: {
    modifyProperty: {
      reducer: (state, action: PayloadAction<GraphicPropertyType>) => {
        state.propertyValue = action.payload.propertyValue;
        state.propertyName = action.payload.propertyName;
      },
      prepare: (propertyValue: string | number, propertyName: string) => {
        return { payload: { propertyValue, propertyName } }
      }
    }
  }
})

export const { modifyProperty } = graphicSlice.actions;

export const selectGraphicPropertyName = (state: State) => state.graphicReducer.propertyName;
export const selectGraphicPropertyValue = (state: State) => state.graphicReducer.propertyValue;

export default graphicSlice.reducer;
