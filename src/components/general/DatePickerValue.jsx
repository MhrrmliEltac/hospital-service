import React, { useCallback, useEffect, useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelected } from "../redux/slice/selectedSlice";
import "dayjs/locale/az";
function DatePickerValue() {
  const [date, setDate] = useState(dayjs());
  const dispatch = useDispatch();
  const selectedItem = useSelector((state) => state.selectedItems.selected);

  useEffect(() => {
    if (date && selectedItem.date !== date.format("DD/MM/YYYY")) {
      dispatch(
        setSelected({
          ...selectedItem,
          date: date.format("DD/MM/YYYY"),
        })
      );
    }
  }, [dispatch, date, selectedItem]);

  const handleDateChange = useCallback((newValue) => {
    setDate(newValue);
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="az">
      <DatePicker value={date} onChange={handleDateChange} />
    </LocalizationProvider>
  );
}

export default memo(DatePickerValue);
