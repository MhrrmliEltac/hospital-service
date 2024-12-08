import React from "react";

const Button = ({ onClick, next, text }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${
        next ? "bg-[#6C70DC] text-white" : "bg-[#E7E8E9] text-[#8F9CA7]"
      } px-3 py-2 w-fit text-xs poppins-bold transition-all duration-500`}
    >
      {next ? text : text}
    </button>
  );
};

export default Button;
