import React from "react";
import About from "./components/About";
import SuccessNumbers from "./components/SuccessNumbers";

const AboutUs: React.FC = () => {
  return (
    <>
      <div className="max-w-[85rem] mx-auto px-4">
        <About />
        <SuccessNumbers />
      </div>
    </>
  );
};

export default AboutUs;
