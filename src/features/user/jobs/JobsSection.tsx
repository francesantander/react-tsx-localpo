import React from "react";
import IndustriesList from "./components/IndustriesList";
import { ScrollArea } from "@mantine/core";
import FindJobInput from "../../../components/FindJobInput";
import FilterMobile from "./components/FilterMobile";
import JobFilter from "./components/JobFilter";
import JobList from "./components/JobList";
import jobData from "../../../data/jobs.json";

const JobsSection: React.FC = () => {
  const industriesData = [
    {
      title: "Technology",
    },
    {
      title: "Healtcare",
    },
    {
      title: "Finance",
    },
    {
      title: "Marketing",
    },
    {
      title: "Education",
    },
    {
      title: "Engineering",
    },
    {
      title: "Customer Service",
    },
    {
      title: "Tutor Online",
    },
  ];

  return (
    <div className="w-full h-full bg-bgColor">
      <div className="w-full lg:pt-7">
        <div className="text-center grid grid-cols gap-y-3">
          <h1 className="text-textBlack font-bold text-4xl">
            Explore Our Featured Jobs Section
          </h1>
          <p className="text-textGray max-w-2xl mx-auto">
            Discover top opportunities across industries. Search by category or
            explore our latest job listings to find your next career move.
          </p>
        </div>
        <div className="pt-10 grid grid-cols gap-y-7">
          <ScrollArea
            h={50}
            type="always"
            scrollbarSize={10}
            offsetScrollbars={true}
          >
            <div className="flex items-center">
              {industriesData.map((industry, index) => (
                <IndustriesList industry={industry} key={index} />
              ))}
            </div>
          </ScrollArea>
          {/* <FilterMobile /> */}
        </div>
        <div className="lg:grid lg:grid-cols-5 lg:grid-rows-6 lg:gap-4 lg:py-10">
          <div className="lg:row-span-6 lg:border lg:border-neutral-300 lg:rounded-md lg:bg-white">
            <JobFilter />
          </div>
          <div className="mt-4 lg:mt-0 lg:col-span-4 lg:row-span-6 h-full">
            <FindJobInput />
            {/* <FilterMobile /> */}
            <div className="w-full mt-3">
              <ScrollArea h={570} scrollbarSize={8}>
                <div className="grid grid-cols gap-y-3">
                  {jobData.map((job, index) => (
                    <JobList job={job} key={index} />
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsSection;
