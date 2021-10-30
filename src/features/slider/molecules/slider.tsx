import React, { memo, useState } from "react";
import styled from "styled-components";
import { SliderItem } from "../atoms/slider-item";

interface ISlider {
	pages: string[];
}

const SliderWrapper = styled.div`
  width: 100%;
  height: 50px;
  margin: 100px;
  padding: 3px;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: rgb(233, 233, 233);
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
    min-width: 150px;
    padding: 10px 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.6;
    transition: 0.2s opacity, 0.2s transform;
    z-index: 1;
    cursor: pointer;
    user-select: none;

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
    background: rgb(255, 255, 255);
    display: block;
    position: absolute;
    transition: 0.3s left, 0.2s transform;
    z-index: 0;
    border-radius: 14px;
    scroll-snap-align: center;
  }
`;

const Slider: React.FC<ISlider> = memo(({ pages }) => {
	const [currentPage, setCurrentPage] = useState(0);

	const moreThanNeeded = pages.length >= 4;

	return (
		<SliderWrapper>
			<span
				className="currentPage"
				style={{
					left: `calc(${(currentPage * 100) / (moreThanNeeded ? 4 : pages.length)
						}% + 3px)`,
					width: `calc(${100 / pages.length}% - 6px)`,
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
});

export default Slider;
