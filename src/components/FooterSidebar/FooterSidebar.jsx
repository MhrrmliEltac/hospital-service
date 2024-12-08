import React from "react";
import Button from "../general/Button";
import { useDispatch, useSelector } from "react-redux";
import { setPage, setPageBack } from "../redux/slice/sectionSlice";
import { setSubmitted, submitForm } from "../redux/slice/formikSlice";

const FooterSidebar = () => {
  const dispatch = useDispatch();
  const sectionPage = useSelector((state) => state.section.page);
  const nextPage = () => {
    dispatch(setPage());
  };

  const prevPage = () => {
    dispatch(setPageBack());
  };

  const submitFormData = () => {
    dispatch(setSubmitted(true));
  };

  return (
    <div
      className={`flex items-center justify-between border-t h-[10.5%] bg-[#F5F7FA] px-10`}
    >
      <div
        className={`${
          sectionPage === 0 ? "hidden" : "flex"
        } justify-between w-full`}
      >
        {sectionPage > 0 && <Button onClick={() => prevPage()} text={"BACK"} />}
        {sectionPage === 2 ? (
          <Button next onClick={() => nextPage()} text={"NEXT"} />
        ) : sectionPage === 3 ? (
          <Button next onClick={submitFormData} text={"FINISH"} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default FooterSidebar;
