import React from "react";
import { Card, Image, ActionIcon, Badge } from "@mantine/core";
import { Icon } from "@iconify/react/dist/iconify.js";
import { JobListProps } from "../../../../interface/interface";

const SimilarJobs: React.FC<JobListProps> = (props) => {
  const { similarJob } = props;
  const { img, title, company, location, tags, posted } = similarJob;

  const tagList = tags.map((tag, index) => (
    <Badge color="gray" key={index} radius="sm" size="sm" className="mr-2">
      {tag}
    </Badge>
  ));
  return (
    <Card shadow="sm" padding="sm" radius="md" withBorder>
      <div className="flex items-start justify-between w-full">
        <div className="grid grid-cols gap-y-2">
          <div className="flex items-center gap-x-2">
            <div>
              <Image
                radius="sm"
                src={img}
                w={50}
                h={50}
                fallbackSrc="https://placehold.co/600x400?text=Placeholder"
              />
            </div>
            <div className="grid grid-cols gap-y-1">
              <h1 className="font-bold text-sm text-textBlack ">{title}</h1>
              <div>
                <div className="flex gap-x-2 items-center text-textGray">
                  <h1 className="text-xs flex font items-center gap-x-1">
                    <Icon icon="ri:building-4-line" />
                    {company}
                  </h1>
                  <Icon fontSize={6} icon="material-symbols:circle" />
                  <h1 className="text-xs flex items-center gap-x-1">
                    <Icon icon="ri:map-pin-line" />
                    {location}
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div>{tagList}</div>
          <div className="flex justify-start pt-2">
            <h1 className="text-xs text-textGray">{posted}</h1>
          </div>
        </div>
        <div className="flex justify-end right-0 top-0">
          <ActionIcon size={34} variant="default" aria-label="Bookmark">
            <Icon icon="ri:bookmark-line" />
          </ActionIcon>
        </div>
      </div>
    </Card>
  );
};

export default SimilarJobs;
