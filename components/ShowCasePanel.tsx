import React from "react";

import { H5, SidePanel } from "../styles/showcasepannel.styled";

interface Props {
  universityData: any;
}

const ShowCasePanel: React.FC<Props> = ({ universityData = [] }) => {
  return (
    <SidePanel>
      <H5>Showcase University</H5>
      <ul>
        {universityData
          .slice(0)
          .reverse()
          .map((value: any, i: any) => (
            <li key={i}>{value.schoolName}</li>
          ))}
      </ul>
    </SidePanel>
  );
};

export default ShowCasePanel;
