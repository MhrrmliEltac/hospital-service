import React from "react";
import Heading from "../general/Heading";
import Note from "../Note/Note";
import { useSelector } from "react-redux";
import SubForm from "../FormikForm/SubForm";
import FormikContext from "../FormikForm/FormikContext";

const Confirmation = () => {
  return (
    <div className="bg-[#F5F7FA] w-[100%] lg:h-[89.5%] lg:w-[800px] flex flex-col ">
      <Heading text={"Confirm details"} />
      <div className="flex justify-center items-center my-5 flex-col">
        <FormikContext />
        <Note />
      </div>
    </div>
  );
};

export default Confirmation;
