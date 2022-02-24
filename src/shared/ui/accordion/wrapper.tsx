import styled from 'styled-components'

const AccordionWrapper = styled.div<{
    height: number
    open: boolean
}>`
    border-radius: var(--br-light);
    display: flex;
    flex-direction: column;
    transition: 0.2s row-gap;
    width: 100%;
    row-gap: ${({ open }) => (open ? '15px' : '0')};

    .inputs {
        display: flex;
        flex-direction: column;
        row-gap: 15px;
        transition: 0.2s height, 0.2s opacity, 0.2s visibility;
        height: ${({ height, open }) => (open ? height + 'px' : '0')};
        opacity: ${({ open }) => (open ? '1' : '0')};
        visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
    }

    @media (max-width: 500px) {
        .inputs {
            height: ${({ height, open }) => (open ? height + 50 + 'px' : '0')};
        }
    }
`

export default AccordionWrapper
