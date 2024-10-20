import React from "react";
import {
  Image,
  ActionIcon,
  List,
  Badge,
  Drawer,
  Button,
  ScrollArea,
} from "@mantine/core";
import { Icon } from "@iconify/react/dist/iconify.js";
import { JobListProps } from "../../../../interface/interface";
import jobData from "../../../../data/jobs.json";
import SimilarJobs from "./SimilarJobs";

const JobDrawer: React.FC<JobListProps> = (props) => {
  const { opened, close, job } = props;

  const {
    img,
    title,
    company,
    location,
    tags,
    posted,
    role,
    responsibilities,
    qualifications,
  } = job;

  const tagList = tags.map((tag, index) => (
    <Badge color="gray" key={index} radius="sm" size="sm" className="mr-2">
      {tag}
    </Badge>
  ));

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        position="bottom"
        scrollAreaComponent={ScrollArea.Autosize}
        size="full"
        style={{ overflow: "hidden" }}
        classNames={{
          inner: "pt-10",
        }}
      >
        <div>
          <Image
            src={img}
            h={250}
            fallbackSrc="https://placehold.co/600x400?text=Placeholder"
          />
        </div>
        <div className="grid lg:grid-cols-[4fr_2fr] px-4 gap-y-10 lg:pt-6 lg:px-7 mb-10">
          <div className="lg:pr-14">
            <div className="pt-4 flex flex-col gap-y-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-x-4">
                <div>
                  <Image
                    radius="sm"
                    src={img}
                    w={80}
                    h={80}
                    fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                  />
                </div>
                <div>
                  <h1 className="font-bold text-lg text-textBlack">{title}</h1>
                  <div>
                    <div className="flex gap-x-3 items-center text-textGray">
                      <h1 className="text-xs md:text-sm flex font items-center gap-x-1">
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
              </div>
              <div>
                <div className="flex items-center gap-x-3">
                  <Button>Apply Now</Button>
                  <ActionIcon size={39} variant="default" aria-label="Bookmark">
                    <Icon icon="ri:bookmark-line" />
                  </ActionIcon>
                  <ActionIcon size={39} variant="default" aria-label="Bookmark">
                    <Icon icon="ri:share-line" />
                  </ActionIcon>
                </div>
                <h1 className="text-textGray text-xs flex justify-end pt-4">
                  {posted}
                </h1>
              </div>
            </div>
            <div className="grid grid-cols gap-y-2 pt-7">
              <h1 className="text-textBlack font-bold">About this Role</h1>
              <p className="text-sm leading-6 text-textGray">{role}</p>
            </div>
            <div className="grid grid-cols gap-y-2 pt-7">
              <h1 className="text-textBlack font-bold">Key Responsibilities</h1>
              <List
                type="unordered"
                className="list-disc text-textGray grid grid-cols gap-y-2"
                size="sm"
              >
                {responsibilities.map((respon, index: number) => (
                  <List.Item className="text-sm leading-6" key={index}>
                    {respon}
                  </List.Item>
                ))}
              </List>
            </div>
            <div className="grid grid-cols gap-y-2 pt-7">
              <h1 className="text-textBlack font-bold">Qualifications</h1>
              <List
                type="unordered"
                className="list-disc text-textGray grid grid-cols gap-y-2"
                size="sm"
              >
                {qualifications.map(
                  (qualification: string[], index: number) => (
                    <List.Item className="text-sm leading-6" key={index}>
                      {qualification}
                    </List.Item>
                  )
                )}
              </List>
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <h1 className="font-bold text-textBlack">Similar Job</h1>
            <ScrollArea h={500}>
              <div className="grid grid-cols gap-y-4">
                {jobData.map((similarJob, index) => (
                  <SimilarJobs similarJob={similarJob} key={index} />
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default JobDrawer;
