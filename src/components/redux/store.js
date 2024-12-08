import { configureStore } from "@reduxjs/toolkit";
import { sectionSlice } from "./slice/sectionSlice";
import { selectedSlice } from "./slice/selectedSlice";
import { formikSlice } from "./slice/formikSlice";

export const store = configureStore({
  reducer: {
    selectedItems: selectedSlice.reducer,
    section: sectionSlice.reducer,
    form: formikSlice.reducer,
  },
});
