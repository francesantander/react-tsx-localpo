import React from "react";
import Hero from "./components/Hero";
import JobsSection from "../jobs/JobsSection";
import Companies from "../../companies/Companies";
import Benefits from "../benefits/Benefits";

const Home: React.FC = () => {
  return (
    <div className="bg-bgColor h-full">
      <div className="lg:max-w-[85rem] mx-auto px-4">
        <Hero />
        <JobsSection />
        <Companies />
        <Benefits />
      </div>
    </div>
  );
};

export default Home;
