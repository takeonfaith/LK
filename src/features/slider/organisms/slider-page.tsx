import React, { useState } from "react";
import styled from "styled-components";
import Slider from "../molecules/slider";

const SliderPageWrapper = styled.div<{ width?: number }>`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => (width ? width : "100%")};
  height: 100%;

  & > * + * {
    margin-top: 10px;
  }
`;

interface Page {
  title: string;
  content: React.ReactNode;
}

interface Props {
  pages: Page[];
  currentPage?: number;
  width?: number;
  className?: string;
}

const SliderPage = ({ pages, currentPage = 0, width, className }: Props) => {
  const [page, setPage] = useState(currentPage);

  return (
    <SliderPageWrapper width={width}>
      <Slider
        pages={pages.map(({ title }) => title)}
        currentPage={page}
        setCurrentPage={setPage}
      />
      <div className={className ?? "slider-content"}>{pages[page].content}</div>
    </SliderPageWrapper>
  );
};

export default SliderPage;
