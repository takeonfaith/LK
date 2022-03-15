import styled from 'styled-components'

const FormBlockWrapper = styled.div`
    width: 100%;
    height: fit-content;
    max-width: 600px;
    padding: 20px;
    border-radius: var(--brSemi);
    background: var(--form);
    box-shadow: var(--schedule-shadow);
    display: flex;
    flex-direction: column;
    row-gap: 20px;

    @media (max-width: 1000px) {
        box-shadow: none;
    }
`

export default FormBlockWrapper
