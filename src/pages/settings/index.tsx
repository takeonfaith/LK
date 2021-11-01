import React, { useState } from "react";
import styled from "styled-components";
import Slider from "../../features/slider/molecules/slider";
import Appearance from "./pages/appearance";
import General from "./pages/general";

const Wrapper = styled.div`
  height: 100%;
  width: 80vw;
  max-width: 1300px;
`;

const SettingsPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const pages = [<General />, <Appearance />];
  return (
    <Wrapper>
      <Slider
        pages={["Общие", "Внешний вид", "Меню", "Аккаунт", "Безопасность"]}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      {pages[currentPage]}
    </Wrapper>
  );
};

export default SettingsPage;
