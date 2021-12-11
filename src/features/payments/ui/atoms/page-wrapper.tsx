import styled from 'styled-components'

const PageWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    & > * + * {
        margin-top: 10px;
    }

    .blocks-wrapper {
        display: flex;
        & > * + * {
            margin-left: 10px;
        }
    }

    .payment-block-content {
        display: flex;
        align-content: center;
        justify-content: center;
        height: 100%;

        & > * + * {
            margin-left: 20px;
        }
    }

    @media (max-width: 1000px) {
        & > * + * {
            margin-left: 0;
            margin-top: 40px;
        }

        .blocks-wrapper {
            display: flex;
            flex-direction: column;
            & > * + * {
                margin-top: 10px;
                margin-left: 0px;
            }
        }

        .payment-block-content {
            flex-direction: column;
            & > * + * {
                margin-left: 0px;
                margin-top: 10px;
            }
        }
    }
`

export default PageWrapper
