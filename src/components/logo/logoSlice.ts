import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {State} from '../../store';

type LogoType = {
  logoPath: string
}

const initialState: LogoType = {
  logoPath: ''
}

export const logoSlice = createSlice({
  name: 'logo',
  initialState,
  reducers: {
    toggleLogo: {
      reducer: (state, action: PayloadAction<LogoType>) => {
        state.logoPath = action.payload.logoPath
      },
      prepare: (logoPath: string) => {
        return { payload: { logoPath } }
      }
    }
  }
})

export const { toggleLogo } = logoSlice.actions;

export const selectLogoName = (state: State) => state.logoReducer.logoPath;

export default logoSlice.reducer;
