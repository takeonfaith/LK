import styled from 'styled-components'

const RowWrapper = styled.div<{ even?: boolean }>`
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 0.9em;
    background: ${({ even }) => (!even ? 'var(--theme)' : 'var(--mild-theme)')};

    @media (max-width: 1200px) {
        .five {
            display: none;
        }
    }

    @media (max-width: 1000px) {
        .four {
            display: flex;
        }
    }

    @media (max-width: 700px) {
        font-size: 0.8em;
        .three {
            display: none;
        }
    }

    @media (max-width: 450px) {
        .two {
            display: none;
        }
    }
`

export default RowWrapper
