import React from "react";
import styled from "styled-components";
import { WeekDayButton } from "..";
import { scheduleModel } from "../../../../entities/schedule";
import { IWeekDays, WeekDays } from "../../../../shared/consts";

const WeekDayButtonsListWrapper = styled.div<{ isFull: boolean }>`
  display: flex;
  align-items: center;
  column-gap: 0px;
  transition: 0.2s;
  height: ${({ isFull }) => (!isFull ? "50px" : "0px")};
  opacity: ${({ isFull }) => (!isFull ? "1" : "0")};
  visibility: ${({ isFull }) => (!isFull ? "visible" : "hidden")};
`;

const WeekDayButtonsList = () => {
  const { schedule, currentModule, currentChosenDay, view } =
    scheduleModel.selectors.useSchedule();

  return (
    <WeekDayButtonsListWrapper isFull={view === "full"}>
      {Object.keys(WeekDays).map((day, index) => {
        return (
          <WeekDayButton
            weekDay={WeekDays[day as keyof IWeekDays].short}
            subjects={schedule[currentModule][day as keyof IWeekDays].subjects}
            isCurrent={currentChosenDay === index + 1}
            index={index + 1}
          />
        );
      })}
    </WeekDayButtonsListWrapper>
  );
};

export default WeekDayButtonsList;
