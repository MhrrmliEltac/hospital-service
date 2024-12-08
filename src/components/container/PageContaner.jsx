import React from "react";

const PageContainer = ({ children }) => {
  return (
    <div className="flex justify-center h-screen lg:items-center bg-[#854CDE]">
      {children}
    </div>
  );
};

export default PageContainer;
