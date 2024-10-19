import React from "react";
import Hero from "./components/Hero";
import JobsSection from "../jobs/JobsSection";

const Home: React.FC = () => {
  return (
    <div className="bg-bgColor h-full">
      <Hero />
      <JobsSection />
    </div>
  );
};

export default Home;
