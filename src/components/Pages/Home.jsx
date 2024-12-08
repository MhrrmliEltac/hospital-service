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
      <div className="h-screen lg:h-full">
        <Menu />
      </div>
      <div className="h-screen lg:h-full">
        {sectionPage === 0 ? <Staff /> : ""}
        {sectionPage === 1 ? <ServiceStaff /> : ""}
        {sectionPage === 2 ? <DateTime /> : ""}
        {sectionPage === 3 ? <Confirmation /> : ""}
        <FooterSidebar />
      </div>
    </PageContainer>
  );
};

export default Home;
