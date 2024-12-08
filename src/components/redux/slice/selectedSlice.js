import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selected: [
    {
      staffName: "",
      serviceName: "",
      date: "",
      price: "",
    },
  ],
};

export const selectedSlice = createSlice({
  name: "staff",
  initialState,
  reducers: {
    setSelected: (state, action) => {
      state.selected = {
        ...action.payload,
      };
    },
  },
});

export const { setSelected } = selectedSlice.actions;

export default selectedSlice.reducer;
