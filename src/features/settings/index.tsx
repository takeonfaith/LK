import React, { useState } from "react";
import styled from "styled-components";
import Slider from "../slider/molecules/slider";
import Appearance from "./pages/appearance";
import CustomizeMenu from "./pages/customize-menu";
import General from "./pages/general";

const Wrapper = styled.div`
  height: 100%;
  width: 80vw;
  max-width: 1300px;

  .settings-page {
    height: 90%;
    border-radius: 10px;
    overflow-y: auto;
    margin-top: 10px;
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const SettingsPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const pages = [<General />, <Appearance />, <CustomizeMenu />];
  return (
    <Wrapper>
      <Slider
        pages={["Общие", "Внешний вид", "Меню", "Аккаунт", "Безопасность"]}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <div className="settings-page">{pages[currentPage]}</div>
    </Wrapper>
  );
};

export default SettingsPage;
