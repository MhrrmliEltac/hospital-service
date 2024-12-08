import React from "react";
import { MdOutlineCancel } from "react-icons/md";

const Heading = ({ text }) => {
  return (
    <div className="flex py-4 px-7 w-full justify-between items-center bg-[#F5F7FA] justify-between w-full border-b-[1px] border-[#E2E2E2]">
      <p className="text-[#282C31] font-[Poppins] font-semibold text-lg">{text}</p>
      <div className="cursor-not-allowed">
        <img
          src="https://hospital-reservation.vercel.app/images/cross.png"
          alt=""
          width={15}
          height={15}
        />
      </div>
    </div>
  );
};

export default Heading;
