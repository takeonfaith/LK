import React, { useMemo, useRef } from "react";
import styled from "styled-components";
import { scheduleModel } from "../../../../entities/schedule";
import { IWeekSchedule } from "../../../../shared/api/model";
import { IWeekDays, WeekDays } from "../../../../shared/consts";
import { DaySchedule } from "../molecules";

const ScheduleWrapper = styled.div<{ isFull: boolean }>`
  display: flex;
  column-gap: 10px;
  overflow-x: auto;
  width: 100%;
  transition: 0.2s;
  padding: ${({ isFull }) => (isFull ? "0px" : "0px calc(50% - 200px)")};
  scroll-snap-type: y proximity;
  scroll-behavior: smooth;
  /* scroll-padding-right: 400px; */

  &::-webkit-scrollbar {
    height: 0;
  }

  @media (max-width: 1000px) {
    scroll-snap-type: x mandatory;
  }
`;

interface Props {
  weekSchedule: IWeekSchedule;
  view: string;
}

const WeekSchedule = ({ weekSchedule, view }: Props) => {
  const { currentDay } = scheduleModel.selectors.useSchedule();
  return (
    <ScheduleWrapper isFull={view === "full"}>
      {Object.keys(weekSchedule).map((day, index) => (
        <>
          <DaySchedule
            isCurrent={currentDay === index + 1}
            weekDay={WeekDays[day as keyof IWeekDays].full}
            subjects={weekSchedule[day as keyof IWeekDays].subjects}
            view={view}
            index={index + 1}
          />
        </>
      ))}
    </ScheduleWrapper>
  );
};

export default WeekSchedule;
