import styled from "styled-components";

export const MoreInfoLink = styled.div`
	cursor: pointer;
	margin-top: 8px;

	display: flex;

	& > svg {
		stroke: var(--blue);
		filter: brightness(1.2);
	}

	& > span {
		margin-left: 5px;
		color: var(--blue);
		filter: brightness(1.2);
	}
`;

export const MoreInfoContent = styled.div`
	min-width: 600px;
`;

export const Description = styled.div`
	display: flex;
	flex-grow: 1;
	flex-direction: column;
	justify-content: space-evenly;
`;