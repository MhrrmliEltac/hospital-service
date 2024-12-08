import React, { useEffect } from "react";
import Heading from "../general/Heading";
import DatePickerValue from "../general/DatePickerValue";
import { memo } from "react";

const DateTime = () => {
  return (
    <div className="bg-[#F5F7FA] h-[89.5%] w-full lg:w-[800px] flex flex-col ">
      <Heading text={"Select date & time"} />
      <div className="flex justify-center items-center my-5">
        <DatePickerValue />
      </div>
    </div>
  );
};

export default memo(DateTime);
