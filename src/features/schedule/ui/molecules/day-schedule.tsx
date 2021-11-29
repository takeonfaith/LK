import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { scheduleModel } from "../../../../entities/schedule";
import { ISubject, ISubjects } from "../../../../shared/api/model";
import getCorrentWordForm from "../../../../shared/lib/get-correct-word-form";
import useOnScreen from "../../../../shared/lib/hooks/use-on-screen";
import { Title } from "../../../../shared/ui/atoms";
import inTimeInterval from "../../lib/in-time-interval";
import { Subject } from "../atoms";
import HolidayPlate from "../atoms/holiday-plate";
import TodayPlate from "../atoms/today-plate";

type Props = ISubjects & {
  weekDay?: string;
  isCurrent?: boolean;
  view?: string;
  width?: number;
  height?: number;
};

const findOpacity = (
  isCurrent: boolean,
  isFull: boolean,
  isVisible: boolean
) => {
  if (isFull) {
    return isCurrent ? 1 : 0.8;
  } else {
    return isVisible ? 1 : 0;
  }
};

const findScale = (isVisible: boolean) => {
  return isVisible ? 1 : 0.9;
};

const DayScheduleWrapper = styled.div<{
  isCurrent: boolean;
  isFull: boolean;
  isVisible: boolean;
  width?: number | undefined;
  height?: number | undefined;
}>`
  display: flex;
  flex-direction: column;
  min-width: ${({ width, isFull }) =>
    !!width ? width + "px" : isFull ? "calc(100% / 6 - 9px)" : "400px"};
  width: ${({ width, isFull }) =>
    !!width ? width + "px" : isFull ? "calc(100% / 6)" : "400px"};
  height: ${({ height }) => (!!height ? height + "px" : "fit-content")};
  transition: 0.2s;
  color: var(--text);
  opacity: ${({ isCurrent, isFull, isVisible }) =>
    findOpacity(isCurrent, isFull, isVisible)};
  transform: scale(${({ isVisible }) => findScale(isVisible)});
  overflow-y: auto;

  .day-title {
    display: flex;
    align-items: center;
    column-gap: 10px;
    margin-bottom: 5px;
    margin-left: 10px;
    width: calc(100% - 20px);
    justify-content: space-between;

    h4 {
      color: ${({ isCurrent }) => (isCurrent ? "var(--blue)" : "var(--text)")};
    }

    span {
      font-weight: 500;
      opacity: 0.7;
      font-size: 0.9em;
    }
  }
`;

const DayScheduleListWrapper = styled.div<{ isFull: boolean }>`
  border-radius: 15px;
  overflow: hidden;
  box-shadow: var(--schedule-shadow);
  padding: 6px;
  background: var(--scheduleBg);
  display: flex;
  flex-direction: column;
  row-gap: 6px;
  overflow-y: auto;
  scroll-snap-type: y proximity;

  &::-webkit-scrollbar {
    width: 0;
  }
`;

const DaySchedule = ({
  subjects,
  weekDay,
  isCurrent,
  view,
  width,
  height,
}: Props) => {
  const dayRef = useRef<null | HTMLDivElement>(null);
  const { currentChosenDay } = scheduleModel.selectors.useSchedule();
  const isOnScreen = useOnScreen(dayRef);

  useEffect(() => {
    if (isCurrent && dayRef.current)
      dayRef?.current?.scrollIntoView({ block: "center", behavior: "smooth" });
  }, [currentChosenDay]);

  return (
    <DayScheduleWrapper
      isCurrent={isCurrent ?? false}
      isFull={view === "full"}
      isVisible={isOnScreen}
      ref={dayRef}
      width={width}
      height={height}
    >
      {!!weekDay && (
        <div className="day-title">
          <Title size={4}>{weekDay}</Title>
          <span>
            {subjects.length}{" "}
            {getCorrentWordForm(subjects.length, {
              zero: "пар",
              one: "пара",
              twoToFour: "пары",
              fiveToNine: "пар",
            })}
          </span>
        </div>
      )}
      <DayScheduleListWrapper isFull={view === "full"}>
        {subjects.map((subject: ISubject, index) => {
          return (
            <Subject
              {...subject}
              index={index}
              isCurrent={
                (isCurrent && inTimeInterval(subject.timeInterval)) ?? false
              }
            />
          );
        })}
        {!subjects.length && <HolidayPlate />}
      </DayScheduleListWrapper>
    </DayScheduleWrapper>
  );
};

export default DaySchedule;
