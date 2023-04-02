import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cereal: 0,
  wood: 0,
  stone: 0,
  iron: 0
};

export const resourcesSlice = createSlice({
  name: "resources",
  initialState,
  reducers: {
    increment: (state, action) => {
      const { crop } = action.payload;
      return {
        ...state,
        [crop]: state[crop] + 1
      };
    },
    decrement: (state, action) => {
      const { cost } = action.payload;
      return {
        ...state,
        cereal: state.cereal - cost.cereal,
        wood: state.wood - cost.wood,
        stone: state.stone - cost.stone,
        iron: state.iron - cost.iron
      };
    }
  }
});

export const { increment, decrement } = resourcesSlice.actions;

export default resourcesSlice.reducer;