import React from "react";

const PageContainer = ({ children }) => {
  return (
    <div className="flex justify-center lg:h-screen h-full lg:items-center bg-[#854CDE]">{children}</div>
  );
};

export default PageContainer;
