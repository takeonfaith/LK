import React from "react";
import styled from "styled-components";

import Header from "./template/header";
import Modal from "../../features/modal";
import LeftsideBar from "./template/leftside-bar";
import PrivateRouter from "../../app/routes/PrivateRouter";

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
			<Modal />
		</div>
	);
};

export default ContentLayout;
