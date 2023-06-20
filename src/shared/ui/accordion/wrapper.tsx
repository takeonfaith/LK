import styled from 'styled-components'

const AccordionWrapper = styled.div<{
    height: number
    open: boolean
}>`
    display: flex;
    flex-direction: column;
    transition: 0.2s;
    width: 100%;
    border-radius: var(--brLight);
    overflow: hidden;

    .inputs {
        padding: ${({ open }) => (open ? '15px 0' : '0')};
        display: flex;
        flex-direction: column;
        row-gap: 15px;
        transition: 0.2s height, 0.2s opacity, 0.2s visibility, 0.2s padding;
        height: ${({ height, open }) => (open ? height + 'px' : '0')};
        opacity: ${({ open }) => (open ? '1' : '0')};
        visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
    }

    @media (max-width: 500px) {
        .inputs {
            height: ${({ height, open }) => (open ? height + 63 + 'px' : '0')};
        }
    }
`

export default AccordionWrapper
