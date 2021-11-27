import React from "react";
import styled from "styled-components";
import { ISubject } from "../../../../shared/api/model";

const SubjectWrapper = styled.div<{
  isCurrent: boolean;
  color: string;
  color2: string;
}>`
  width: 100%;
  background: ${({ isCurrent, color, color2 }) =>
    isCurrent
      ? `linear-gradient(45deg, ${color}, ${color2})`
      : "var(--schedule)"};
  color: ${({ isCurrent }) => (isCurrent ? "#fff" : "var(--text)")};
  padding: 20px 15px;
  box-shadow: 0 0 2px #8a8a8a;

  .time-and-place {
    font-size: 0.7em;
    .time {
      padding: 3px 10px;
      background: rgb(64, 197, 197);
      color: #fff;
      border-radius: 100px;
    }
  }

  h3 {
    margin-top: 15px;
    margin-bottom: 10px;
    font-size: 0.9em;
  }

  .teachers {
    font-size: 0.8em;
  }

  .date-interval {
    font-size: 0.7em;
    opacity: 0.6;
  }
`;

type Props = ISubject & { index: number; isCurrent: boolean };

const Subject = ({
  timeInterval,
  name,
  place,
  teachers,
  dateInterval,
  index,
  isCurrent,
}: Props) => {
  const colors = [
    "rgb(64, 197, 197)",
    "rgb(95, 109, 236)",
    "rgb(168, 95, 236)",
    "rgb(236, 95, 182)",
    "rgb(236, 95, 107)",
  ];
  const colors2 = [
    "rgba(64, 197, 197, .3)",
    "rgba(95, 109, 236, .3)",
    "rgba(168, 95, 236, .3)",
    "rgba(236, 95, 182, .3)",
    "rgba(236, 95, 107, .3)",
  ];
  return (
    <SubjectWrapper
      isCurrent={isCurrent}
      color={colors[index]}
      color2={colors2[index]}
    >
      <h4 className="time-and-place">
        <span
          className="time"
          style={{
            background: colors[index],
            boxShadow: `0 0 30px ${colors2[index]}`,
          }}
        >
          {timeInterval}
        </span>
        <span className="place"> {place}</span>
        {/* <span className="currentOrNext" >{isToday ? inTimeInterval(time, currentDay) ? "Сейчас" : isNextSubject(time, currentDay) ? "Следующая" : null : null}</span> */}
      </h4>
      <h3>{name}</h3>
      <p className="teachers">
        {teachers.map((teacher: string) => {
          return teacher + " ";
        })}
      </p>
      <p className="date-interval">{dateInterval}</p>
    </SubjectWrapper>
  );
};

export default Subject;
