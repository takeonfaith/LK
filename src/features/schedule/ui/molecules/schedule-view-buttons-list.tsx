import React from "react";
import { FiColumns, FiSidebar } from "react-icons/fi";
import styled from "styled-components";
import { ViewType } from "../../../../shared/api/model";
import { Button } from "../../../../shared/ui/atoms";

const ScheduleViewButtonsListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: var(--mild-theme);

  button:nth-child(1) {
    border-radius: 10px 0 0 10px;
  }

  button:nth-child(2) {
    border-radius: 0 10px 10px 0;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

interface Props {
  view: string;
  setView: (view: ViewType) => void;
}

const ScheduleViewButtonsList = ({ view, setView }: Props) => {
  const handleChangeView = (view: ViewType) => {
    setView(view);
  };
  return (
    <ScheduleViewButtonsListWrapper>
      <Button
        icon={<FiSidebar />}
        onClick={() => handleChangeView("full")}
        isChosen={view === "full"}
      />
      <Button
        icon={<FiColumns />}
        onClick={() => handleChangeView("big")}
        isChosen={view === "big"}
      />
    </ScheduleViewButtonsListWrapper>
  );
};

export default ScheduleViewButtonsList;
