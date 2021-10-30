import React from "react";
import styled from "styled-components";
import PrivateRouter from "../../app/routes/PrivateRouter";
import Header from "./template/header";
import LeftsideBar from "./template/leftside-bar";

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  z-index: 3;
`;

const ContentLayout = () => {
  return (
    <div style={{ height: "100vh", display: "flex" }}>
      <LeftsideBar />
      <ContentWrapper>
        <Header />
        <PrivateRouter />
      </ContentWrapper>
    </div>
  );
};

export default ContentLayout;
