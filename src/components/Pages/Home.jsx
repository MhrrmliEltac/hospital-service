import React, { useEffect } from "react";
import PageContainer from "../container/PageContaner";
import Menu from "../MenuItems/Menu";
import Staff from "./Staff";
import FooterSidebar from "../FooterSidebar/FooterSidebar";
import ServiceStaff from "./ServiceStaff";
import DateTime from "./DateTime";
import Confirmation from "./Confirmation";
import { useSelector } from "react-redux";

const Home = () => {
  const sectionPage = useSelector((state) => state.section.page);

  return (
    <PageContainer>
      <div className="max-w-screen lg:w-[1000px] lg:h-[641px] lg:flex lg:rounded-lg lg:shadow-lg flex ">
        {" "}
        <div className=" lg:h-full">
          <Menu />
        </div>
        <div className="lg:h-full">
          {sectionPage === 0 ? <Staff /> : ""}
          {sectionPage === 1 ? <ServiceStaff /> : ""}
          {sectionPage === 2 ? <DateTime /> : ""}
          {sectionPage === 3 ? <Confirmation /> : ""}
          <FooterSidebar />
        </div>
      </div>
    </PageContainer>
  );
};

export default Home;
