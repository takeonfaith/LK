import React from "react";
import styled from "styled-components";
import { ISubject, ISubjects } from "../../../../shared/api/model";
import { Title } from "../../../../shared/ui/atoms";
import inTimeInterval from "../../lib/in-time-interval";
import { Subject } from "../atoms";
import TodayPlate from "../atoms/today-plate";

type Props = ISubjects & { weekDay: string; isCurrent: boolean };

const DayScheduleWrapper = styled.div<{ isCurrent: boolean }>`
  display: flex;
  flex-direction: column;
  width: calc(100% / 6);
  max-width: 400px;
  color: var(--text);
  opacity: ${({ isCurrent }) => (isCurrent ? 1 : 0.8)};
  transform: scale(${({ isCurrent }) => (isCurrent ? 1 : 0.97)});
  /* filter: brightness(${({ isCurrent }) => (isCurrent ? 1 : 0.8)}); */

  .day-title {
    display: flex;
    align-items: center;
    column-gap: 10px;
    margin-bottom: 5px;
    margin-left: 10px;
  }
`;

const DayScheduleListWrapper = styled.div`
  border-radius: 15px;
  overflow: hidden;
  box-shadow: var(--schedule-shadow);
`;

const DaySchedule = ({ subjects, weekDay, isCurrent }: Props) => {
  return (
    <DayScheduleWrapper isCurrent={isCurrent}>
      <div className="day-title">
        <Title size={4}>{weekDay}</Title>
        {isCurrent && <TodayPlate />}
      </div>
      <DayScheduleListWrapper>
        {subjects.map((subject: ISubject, index) => {
          return (
            <Subject
              {...subject}
              index={index}
              isCurrent={isCurrent && inTimeInterval(subject.timeInterval)}
            />
          );
        })}
      </DayScheduleListWrapper>
    </DayScheduleWrapper>
  );
};

export default DaySchedule;
