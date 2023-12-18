// wrestlersSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Wrestler } from '@/shared/shared-types';


interface WrestlersState {
  wrestlers: Wrestler[];
}

const initialState: WrestlersState = {
  wrestlers: [],
};

const wrestlersSlice = createSlice({
  name: 'wrestlers',
  initialState,
  reducers: {
    getWrestlers: (state, action: PayloadAction<Wrestler[]>) => {
      state.wrestlers = action.payload;
    },
  },
});

export const { getWrestlers } = wrestlersSlice.actions;
export default wrestlersSlice.reducer;
