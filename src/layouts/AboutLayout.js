import React from "react";
import Header from "../components/Header/Header";

const AboutLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default AboutLayout;
