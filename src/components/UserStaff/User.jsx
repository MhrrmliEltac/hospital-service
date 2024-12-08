import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelected } from "../redux/slice/selectedSlice";
import { setPage } from "../redux/slice/sectionSlice";

const User = ({ name, img, email }) => {
  const dispatch = useDispatch();
  const selectedItem = useSelector((state) => state.selectedItems.selected);

  const handleClick = useCallback(() => {
    dispatch(
      setSelected({
        staffName: name,
        serviceName: selectedItem.serviceName || "",
        date: selectedItem.date || "",
        price: selectedItem.price || "",
      })
    );
    dispatch(setPage());
  }, [dispatch, name, selectedItem]);

  return (
    <div
      onClick={handleClick}
      className={`py-4 px-6 bg-white flex my-3 gap-5 w-full items-center border-transparent border-4 transition-all duration-500 hover:border-[lime] cursor-pointer ${
        selectedItem.staffName === name ? "border-[lime]" : ""
      }`}
    >
      <img src={img} alt={name} />
      <div className="flex items-start flex-col justify-start">
        <p className="poppins-semibold text-xs md:text-sm text-[#292d32] mb-2">{name}</p>
        <p className="md:text-xs text-[7px] flex flex-wrap  text-[#828f9a] poppins-regular">{email}</p>
      </div>
    </div>
  );
};

export default User;
