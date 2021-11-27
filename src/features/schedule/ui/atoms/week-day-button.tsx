import React from "react";
import styled from "styled-components";
import { ISubjects } from "../../../../shared/api/model";
import { Colors } from "../../../../shared/consts";
import { Title } from "../../../../shared/ui/atoms";

const WeekDayButtonWrapper = styled.button`
  padding: 10px;
  border-radius: 10px;
  background: var(--mild-theme);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  color: var(--text);
  row-gap: 6px;

  .marker-circles {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .marker-circle {
      width: 8px;
      height: 8px;
      margin: 0px 3px;
      border-radius: 100%;
    }
  }
`;

type Props = ISubjects & { weekDay: string };

const WeekDayButton = ({ weekDay, subjects }: Props) => {
  return (
    <WeekDayButtonWrapper>
      <Title size={4}>{weekDay}</Title>
      <span className="marker-circles">
        {Object.values(Colors).map((color) => {
          return (
            <span
              className="marker-circle"
              style={{ background: color.primary }}
            />
          );
        })}
      </span>
    </WeekDayButtonWrapper>
  );
};

export default WeekDayButton;
