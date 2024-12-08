import React from "react";
import ServiceItem from "../ServiceStaff/ServiceItem";
import Heading from "../general/Heading";
import { serviceStaff } from "../../data/serviceStaff";
import { useSelector } from "react-redux";

const ServiceStaff = () => {
  const asd = useSelector((state) => state.selectedItems.selected);

  return (
    <div className="bg-[#F5F7FA] w-full lg:w-[800px] md:h-[89.5%] flex flex-col ">
      <Heading text={"Select service"} />
      <div className="p-7 pt-4">
        {serviceStaff.map((service, index) => (
          <ServiceItem
            name={service.name}
            img={service.img}
            date={service.date}
            price={service.price}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceStaff;
