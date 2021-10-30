import React from "react";
import { IconType } from "react-icons/lib";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BlueColor, RedColor } from "../colors";

interface Props {
	id: number;
	title: string;
	icon: IconType;
	path: string;
	currentPage: number;
	setCurrentPage: (currentPage: number) => void;
}

const LeftsideBarItemWrapper = styled(Link) <{
	isCurrent: boolean;
	currentPage: number;
}>`
  position: relative;

  &::before {
    content: "";
    width: ${({ isCurrent }) => (isCurrent ? "3px" : 0)};
    height: 20px;
    display: block;
    position: absolute;
    top: 50%;
    left: -15px;
    transform: translateY(-50%);
    background: ${BlueColor.primary};
    border-radius: 10px;
    transition: 0.2s width;
  }

  &:hover::before {
    width: 5px;
    background: ${RedColor.primary};
  }

  svg,
  strong {
    color: ${({ isCurrent }) => (isCurrent ? BlueColor.primary : "black")};
  }
`;

const LeftsideBarItem = ({
	icon,
	id,
	title,
	path,
	currentPage,
	setCurrentPage,
}: Props) => {
	const showIcon = () => {
		const Icon = icon;
		return <Icon />;
	};

	return (
		<LeftsideBarItemWrapper
			to={path}
			className="leftside-bar-item"
			onClick={() => setCurrentPage(id)}
			currentPage={currentPage}
			isCurrent={id === currentPage}
		>
			{showIcon()}
			<strong>{title}</strong>
		</LeftsideBarItemWrapper>
	);
};

export default LeftsideBarItem;
