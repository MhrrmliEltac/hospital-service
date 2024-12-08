import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../redux/slice/sectionSlice";
import { setSelected } from "../redux/slice/selectedSlice";

const ServiceItem = ({ name, img, date, price }) => {
  const selectedItem = useSelector((state) => state.selectedItems.selected);
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch(
      setSelected({
        staffName: selectedItem.staffName || "",
        serviceName: name,
        date: selectedItem.date || "",
        price: price,
      })
    );
    dispatch(setPage());
  }, [dispatch, name, price, selectedItem]);
  const sectionPage = useSelector((state) => state.section.page);

  return (
    <div
      className={`md:py-2 md:px-4 bg-white w-full flex my-3 gap-5 w-full items-center border-transparent border-4 transition-all duration-500 hover:border-4 hover:border-[lime] cursor-pointer justify-between ${
        selectedItem.serviceName === name ? "border-[lime]" : ""
      }`}
      onClick={handleClick}
    >
      <div className="flex gap-3 items-center">
        <img src={img} alt="" />
        <div className="flex items-start flex-col justify-start">
          <p className="poppins-semibold md:text-sm text-xs text-[#292d32] mb-2">{name}</p>
          <span className="text-xs text-[#828f9a] poppins-regular">{date}</span>
        </div>
      </div>
      <div className="md:text-xl text-sm poppins-bold gap-1 flex text-[#4FBF65]">
        <p>{price}</p>$
      </div>
    </div>
  );
};

export default ServiceItem;
