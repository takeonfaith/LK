import styled from 'styled-components'

const InputAreaWrapper = styled.div<{
    openArea: boolean
    amount: number
    withLoadDoc: boolean
    hint: number
    addNew: boolean
    optionalCheckbox: boolean
}>`
    display: flex;
    flex-direction: column;
    transition: 0.2s row-gap;
    row-gap: ${({ openArea }) => (openArea ? '15px' : '0')};

    .inputs {
        display: flex;
        flex-direction: column;
        row-gap: 15px;
        transition: 0.2s height, 0.2s opacity, 0.2s visibility;
        height: ${({ openArea, amount, withLoadDoc, hint, addNew, optionalCheckbox }) =>
            openArea
                ? amount * 57 +
                  36 +
                  15 * amount -
                  1 +
                  (addNew ? 80 : 0) +
                  (withLoadDoc ? 150 : 0) +
                  (hint ? (hint <= 70 ? hint : (hint / 120) * 50) : 0) +
                  (optionalCheckbox ? 80 : 0) +
                  'px'
                : '0'};
        opacity: ${({ openArea }) => (openArea ? '1' : '0')};
        visibility: ${({ openArea }) => (openArea ? 'visible' : 'hidden')};
        .buttons {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .data-line {
            display: flex;
            align-items: flex-end;
            column-gap: 5px;
        }
    }

    /* @media (max-width: 600px) {
		 .inputs {
			  .data-line {
					display: flex;
					row-gap: 5px;
					column-gap: 5px;
					flex-direction: column;
			  }
		 }
	} */
`

export default InputAreaWrapper
