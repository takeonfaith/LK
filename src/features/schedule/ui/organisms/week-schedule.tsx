import React, { useMemo } from "react";
import styled from "styled-components";
import { IWeekSchedule } from "../../../../shared/api/model";
import { IWeekDays, WeekDays } from "../../../../shared/consts";
import { DaySchedule } from "../molecules";

const ScheduleWrapper = styled.div`
  display: flex;
  column-gap: 10px;
`;

interface Props {
  weekSchedule: IWeekSchedule;
}

const WeekSchedule = ({ weekSchedule }: Props) => {
  const currentDay = useMemo(() => 3, []);
  return (
    <ScheduleWrapper>
      {Object.keys(weekSchedule).map((day, index) => (
        <>
          <DaySchedule
            isCurrent={currentDay === index + 1}
            weekDay={WeekDays[day as keyof IWeekDays].full}
            subjects={weekSchedule[day as keyof IWeekDays].subjects}
          />
        </>
      ))}
    </ScheduleWrapper>
  );
};

export default WeekSchedule;
