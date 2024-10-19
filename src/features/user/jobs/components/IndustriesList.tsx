import React from "react";
import { Chip } from "@mantine/core";
import { IndustriesListProps } from "../../../../interface/interface";
import { ScrollArea, Box } from "@mantine/core";

const IndustriesList: React.FC<IndustriesListProps> = (props) => {
  const { industry } = props;
  const { title } = industry;

  return (
    <Chip variant="outline" className="mr-2">
      {title}
    </Chip>
  );
};

export default IndustriesList;
