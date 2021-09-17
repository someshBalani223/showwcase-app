import React from "react";

import { BoxContainer } from "../styles/showcase.styled";
import { getMonthAndYear } from "../utils";

interface Props {
  universityData: any;
}

const ShowCaseContainer: React.FC<Props> = ({ universityData = [] }) => {
  return (
    <BoxContainer>
      <>
        {universityData
          .slice(0)
          .reverse()
          .map((value: any, i: any) => (
            <>
              <h4 key={i}>{`${value.schoolName} @ ShowCase University`}</h4>
              <div>{`${getMonthAndYear(value.startYear)} - ${getMonthAndYear(value.endYear)}`}</div>
              <ul>
                <li>{value.description}</li>
              </ul>
            </>
          ))}
      </>
    </BoxContainer>
  );
};

export default ShowCaseContainer;
