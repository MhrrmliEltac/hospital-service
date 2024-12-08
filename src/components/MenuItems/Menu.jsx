import React from "react";
import { useSelector } from "react-redux";

const Menu = () => {
  const sectionPage = useSelector((state) => state.section.page);

  return (
    <div className="w-[190px] bg-[#292d32] h-screen flex flex-col items-center justify-between lg:h-[100%]">
      <ul className="w-[80%] mt-[20px] p-1 flex flex-col px-2 gap-[25px]">
        <li
          className={`text-[#53D56C] text-sm  flex items-center gap-3 poppins-regular ${
            sectionPage && "text-white"
          }`}
          id="staff"
        >
          <span
            className={`w-[25px] h-[25px] rounded-full text-white flex text-xs justify-center items-center bg-[#53D56C] ${
              sectionPage === 0 ? "" : "bg-[#854CDE]"
            }`}
          >
            {" "}
            {sectionPage ? "✓" : 1}
          </span>
          Staff
        </li>
        <li
          className={`text-sm  flex items-center gap-3 poppins-regular ${
            sectionPage === 2
              ? "text-white"
              : sectionPage === 3
              ? "text-white"
              : ""
          } ${sectionPage === 1 ? "text-[#53D56C]" : "text-[#626c76]"}`}
          id="service"
        >
          <span
            className={`w-[25px] h-[25px] rounded-full text-xs text-white flex justify-center items-center bg-[#4D545A] ${
              sectionPage === 2
                ? "bg-[#854CDE]"
                : sectionPage === 3
                ? "bg-[#854CDE]"
                : ""
            } ${sectionPage === 1 ? "bg-[#53D56C]" : ""}`}
          >
            {" "}
            {sectionPage === 2 ? "✓" : sectionPage === 3 ? "✓" : 2}
          </span>
          Service{" "}
        </li>
        <li
          className={`text-sm  flex items-center gap-3 poppins-regular ${
            sectionPage === 3 ? "text-white" : ""
          } ${sectionPage === 2 ? "text-[#53D56C]" : "text-[#626c76]"}`}
        >
          <span
            className={`w-[25px] h-[25px] rounded-full text-xs text-white flex justify-center items-center bg-[#4D545A] ${
              sectionPage === 3 ? "bg-[#854CDE]" : ""
            } ${sectionPage === 2 ? "bg-[#53D56C]" : ""}`}
          >
            {" "}
            {sectionPage === 3 ? "✓" : 3}
          </span>
          Date & Time{" "}
        </li>
        <li
          className={`text-[#626c76] text-sm  flex items-center gap-3 poppins-regular ${
            sectionPage === 4 ? "text-white" : ""
          } ${sectionPage === 3 ? "text-[#53D56C]" : "text-[#626c76]"}`}
        >
          <span
            className={`w-[25px] h-[25px] rounded-full text-xs text-white flex justify-center items-center bg-[#4D545A] ${
              sectionPage === 4 ? "bg-[#854CDE]" : ""
            } ${sectionPage === 3 ? "bg-[#53D56C]" : ""}`}
          >
            {" "}
            {sectionPage === 4 ? "✓" : 4}
          </span>
          Confirmation{" "}
        </li>
      </ul>
      <div className="h-[10.5%] border-t w-full border-[#ffffff19]"></div>
    </div>
  );
};

export default Menu;
