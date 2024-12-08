import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  submitted: false,
  formData: null,
};

export const formikSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    submitForm: (state, action) => {
      state.formData = action.payload;
    },
    setSubmitted: (state, action) => {
      state.submitted = action.payload;
    },
  },
});

export const { submitForm, setSubmitted } = formikSlice.actions;

export default formikSlice.reducer;
