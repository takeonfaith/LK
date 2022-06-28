import styled from 'styled-components'

const FormBlockWrapper = styled.div<{ maxWidth?: string }>`
    width: 100%;
    height: fit-content;
    max-width: ${({ maxWidth }) => maxWidth ?? '600px'};
    padding: 20px;
    border-radius: var(--brSemi);
    background: var(--schedule);
    box-shadow: var(--schedule-shadow);
    display: flex;
    flex-direction: column;
    row-gap: 20px;

    @media (max-width: 1000px) {
        box-shadow: none;
        padding: 10px 0px;
        background: transparent;
    }
`

export default FormBlockWrapper
