import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 0,
  active: false,
};

export const sectionSlice = createSlice({
  name: "section",
  initialState,
  reducers: {
    setPage: (state) => {
      state.page += 1;
    },
    setPageBack: (state) => {
      if (state.page > 0) {
        state.page -= 1;
      }
    },
  },
});

export const { setPage, setPageBack } = sectionSlice.actions;

export default sectionSlice.reducer;
