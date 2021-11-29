import React from "react";
import styled from "styled-components";
import { scheduleModel } from "../../../../entities/schedule";
import {
  ISubjects,
  ITimeIntervalColor,
  TimeIntervalColor,
} from "../../../../shared/api/model";
import { Title } from "../../../../shared/ui/atoms";

const WeekDayButtonWrapper = styled.button<{ isCurrent: boolean }>`
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  color: ${({ isCurrent }) => (isCurrent ? "#000" : "var(--text)")};
  row-gap: 6px;
  cursor: pointer;
  outline: none;
  transition: 0.2s;
  width: 100px;
  height: 54px;
  user-select: none;
  opacity: ${({ isCurrent }) => (isCurrent ? "1" : "0.7")};
  transform: scale(${({ isCurrent }) => (isCurrent ? "1" : "0.9")});
  background: ${({ isCurrent }) =>
    isCurrent ? "var(--lightBlue)" : "var(--mild-theme)"};

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

    img {
      width: 20px;
      height: 20px;
    }
  }
`;

type Props = ISubjects & { weekDay: string; isCurrent: boolean; index: number };

const WeekDayButton = ({ weekDay, subjects, isCurrent, index }: Props) => {
  return (
    <WeekDayButtonWrapper
      isCurrent={isCurrent}
      onClick={() =>
        scheduleModel.events.changeCurrentChosenDay({ day: index })
      }
    >
      <Title size={4}>{weekDay}</Title>
      <span className="marker-circles">
        {subjects.map((subject) => {
          if (
            TimeIntervalColor[subject.timeInterval as keyof ITimeIntervalColor]
          ) {
            return (
              <span
                className="marker-circle"
                style={{
                  background:
                    TimeIntervalColor[
                      subject.timeInterval as keyof ITimeIntervalColor
                    ].main,
                }}
              />
            );
          }
        })}
        {!subjects.length && (
          <img
            src="https://i.pinimg.com/originals/d5/2c/46/d52c464bef731d5a93570687acd99b79.gif"
            alt="спим"
          />
        )}
      </span>
    </WeekDayButtonWrapper>
  );
};

export default WeekDayButton;
