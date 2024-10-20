import React from "react";
import { Card, Image, ActionIcon, Badge, List } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Icon } from "@iconify/react/dist/iconify.js";
import { JobListProps } from "../../../../interface/interface";
import JobDrawer from "./JobDrawer";

const JobList: React.FC<JobListProps> = (props) => {
  const { job } = props;
  const { img, title, company, location, tags, description, posted } = job;
  const [opened, { open, close }] = useDisclosure(false);

  const tagList = tags.map((tag, index) => (
    <Badge color="gray" key={index} radius="sm" size="sm" className="mr-2">
      {tag}
    </Badge>
  ));

  return (
    <>
      <Card
        className="cursor-pointer"
        onClick={open}
        shadow="sm"
        padding="lg"
        radius="md"
        withBorder
      >
        <div className="relative">
          <div className="grid grid-cols gap-y-4 lg:flex lg:items-center lg:gap-x-4">
            <div>
              <Image
                radius="md"
                src={img}
                h={80}
                w={80}
                fallbackSrc="https://placehold.co/600x400?text=Placeholder"
              />
            </div>
            <div className="grid grid-cols gap-y-1">
              <h1 className="font-bold text-textBlack">{title}</h1>
              <div className="flex gap-x-3 items-center text-sm text-textGray">
                <h1 className="text-xs md:text-sm flex items-center gap-x-1">
                  <Icon icon="ri:building-4-line" />
                  {company}
                </h1>
                <Icon fontSize={6} icon="material-symbols:circle" />
                <h1 className="text-xs md:text-sm flex items-center gap-x-1">
                  <Icon icon="ri:map-pin-line" />
                  {location}
                </h1>
              </div>
              <div>{tagList}</div>
            </div>
          </div>
          <div className="mt-3">
            <List
              type="unordered"
              className="list-disc text-textGray grid grid-cols gap-y-2 max-w-3xl"
              size="sm"
            >
              {description.map((desc, index) => (
                <List.Item className="leading-normal" key={index}>
                  {desc}
                </List.Item>
              ))}
            </List>
          </div>
          <div className="justify-end flex mt-3">
            <h1 className="text-textGray text-sm">{posted}</h1>
          </div>
          <div className="absolute right-0 top-0">
            <ActionIcon size={37} variant="default" aria-label="Bookmark">
              <Icon icon="ri:bookmark-line" />
            </ActionIcon>
          </div>
        </div>
      </Card>
      <JobDrawer job={job} opened={opened} close={close} />
    </>
  );
};

export default JobList;
