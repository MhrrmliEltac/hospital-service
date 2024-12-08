import React from "react";
import User from "../UserStaff/User";
import FooterSidebar from "../FooterSidebar/FooterSidebar";
import Heading from "../general/Heading";
import { useDispatch } from "react-redux";
import { userStaff } from "../../data/userStaff";

const Staff = () => {
  return (
    <div className="bg-[#F5F7FA] h-[89.5%] w-full lg:w-[800px] flex flex-col ">
      <Heading text={"Select Staff"} />
      <div className="p-7 pt-4">
        {userStaff.map((user, index) => (
          <User
            name={user.name}
            img={user.img}
            email={user.email}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Staff;
