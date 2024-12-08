import React from "react";
import { useSelector } from "react-redux";

const Note = () => {
  const selectedItem = useSelector((state) => state.selectedItems.selected);

  return (
    <div className="w-[90%] my-10 font-[Poppins] text-sm">
      <h4>Note</h4>
      <div className="text-[#8B51E2] bg-white p-5 font-[Poppins] text-sm">
        <p>
          Staff:{" "}
          <span className="font-[Poppins] text-sm text-black">
            {selectedItem.staffName}
          </span>
        </p>
        <p>
          Service:{" "}
          <span className="font-[Poppins] text-sm text-black">
            {selectedItem.serviceName}
          </span>
        </p>
        <p>
          Date:{" "}
          <span className="font-[Poppins] text-sm text-black">
            {selectedItem.date}
          </span>
        </p>
        <p>
          Price:{" "}
          <span className="font-[Poppins] text-sm text-[#53D56C]">
            {selectedItem.price} $
          </span>
        </p>
      </div>
    </div>
  );
};

export default Note;
