import styled from 'styled-components'

const PageWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
    gap: 10px;

    .blocks-wrapper {
        display: flex;
        width: 100%;
        justify-content: center;

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

    @media (max-width: 1400px) {
        align-items: center;
        justify-content: center;
        .blocks-wrapper {
            width: 100%;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border-top: 1px solid var(--almostTransparent);
            margin-top: 20px;
            padding-top: 20px;

            & > * + * {
                margin-left: 0px;
                margin-top: 10px;
            }
        }
    }

    @media (max-width: 1225px) {
        .blocks-wrapper {
            max-width: 600px;
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
