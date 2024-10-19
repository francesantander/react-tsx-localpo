import React from "react";
import IndustriesList from "./components/IndustriesList";
import { ScrollArea, Button, Divider, Select } from "@mantine/core";
import FindJobInput from "../../../components/FindJobInput";
import FilterMobile from "./components/FilterMobile";
import JobFilter from "./components/JobFilter";
import JobContainer from "./components/JobContainer";
import JobList from "./components/JobList";

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

  const jobData = [
    {
      img: "",
      title: "Senior Software Engineer",
      company: "FutureTech Corp.",
      location: "BGC - Manila",
      type: "Full-time",
      experience: "6-8 experience",
      salary: "80,000-100,000",
      description: [
        "Create user-centered design solutions that meet business goals and user needs, ensuring a seamless and enjoyable user experience.",
        "Develop wireframes, prototypes, and high-fidelity mockups to effectively communicate design ideas to stakeholders and development teams.",
      ],
    },
  ];

  return (
    <div className="w-full h-full bg-bgColor">
      <div className="w-full lg:max-w-[85rem] mx-auto px-4 lg:pt-7">
        <div className="text-center grid grid-cols gap-y-3">
          <h1 className="text-textBlack font-bold text-4xl">Jobs section</h1>
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
        <div className="grid grid-cols-5 grid-rows-6 gap-4 py-10">
          <div className="row-span-6 border border-neutral-300 rounded-md bg-white">
            <JobFilter />
          </div>
          <div className="col-span-4 row-span-5">
            <FindJobInput />
            <div className="w-full border border-neutral-200 rounded-md">
              {jobData.map((job, index) => (
                <JobList job={job} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsSection;
