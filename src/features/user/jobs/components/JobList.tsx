import React from "react";
import { Card, Image } from "@mantine/core";
import { Icon } from "@iconify/react/dist/iconify.js";

const JobList: React.FC = (props) => {
  const { job } = props;

  const {
    img,
    title,
    company,
    location,
    type,
    experience,
    salary,
    description,
  } = job;

  return (
    <Card shadow="sm" padding="lg" classNames={{ root: "bg-transparent" }}>
      <div>
        <div className="flex items-center gap-x-4">
          <div>
            <Image
              radius="md"
              src={null}
              h={50}
              fallbackSrc="https://placehold.co/600x400?text=Placeholder"
            />
          </div>
          <div>
            <h1 className="font-bold text-textBlack">{title}</h1>
            <div className="flex gap-x-2 items-center text-sm text-textGray">
              <h1 className="">{company}</h1>
              <Icon fontSize={4} icon="material-symbols:circle" />
              <h1>{company}</h1>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default JobList;
