import React, { memo } from "react";
import styled from "styled-components";
import { SliderItem } from "../atoms/slider-item";

interface ISlider {
  pages: string[];
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
}

const SliderWrapper = styled.div`
  width: 100%;
  height: 50px;
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: var(--search2);
  position: relative;
  border-radius: 17px;
  overflow-y: hidden;
  overflow-x: auto;
  scroll-snap-type: x proximity;

  &::-webkit-scrollbar {
    display: none;
  }

  &:active .currentPage {
    transform: scale(0.9);
  }

  .SliderItem {
    width: 100%;
    height: 100%;
    min-width: 20%;
    padding: 10px 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.6;
    transition: 0.2s opacity, 0.2s transform;
    z-index: 1;
    cursor: pointer;
    user-select: none;
    color: var(--text);

    &.active {
      opacity: 1;
    }

    &:active {
      transform: scale(0.97);
    }
  }

  .currentPage {
    min-width: 150px;
    height: calc(100% - 6px);
    background: var(--theme);
    display: block;
    position: absolute;
    transition: 0.3s left, 0.2s transform;
    z-index: 0;
    border-radius: 14px;
    scroll-snap-align: center;
  }
`;

const Slider: React.FC<ISlider> = memo(
  ({ pages, currentPage, setCurrentPage }) => {
    const moreThanNeeded = pages.length >= 5;

    return (
      <SliderWrapper>
        <span
          className="currentPage"
          style={{
            left: `calc(${
              (currentPage * 100) / (!moreThanNeeded ? pages.length : 5)
            }% + 3px)`,
            width: `calc(${100 / (!moreThanNeeded ? pages.length : 5)}% - 6px)`,
          }}
        />
        {pages.map((page: string, index: number) => {
          return (
            <SliderItem
              id={index}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              pageTitle={page}
              key={index}
            />
          );
        })}
      </SliderWrapper>
    );
  }
);

export default Slider;
