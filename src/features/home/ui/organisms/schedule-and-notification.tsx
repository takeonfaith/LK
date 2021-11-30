import React from "react";
import { scheduleModel } from "../../../../entities/schedule";
import { DaySchedule } from "../../../schedule/ui";
import { Section } from "../atoms/section";

const ScheduleAndNotification = () => {
  const { currentModule, schedule } = scheduleModel.selectors.useSchedule();
  return (
    <Section>
      <DaySchedule
        subjects={schedule[currentModule].monday.subjects}
        width={400}
        height={156}
        isCurrent
        index={0}
      />
    </Section>
  );
};

export default ScheduleAndNotification;
