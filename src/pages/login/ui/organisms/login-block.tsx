import BlockWrapper from '@ui/block/styles'
import styled from 'styled-components'
import Information from '../molecules/information'
import Inputs from '../molecules/inputs'

const LoginBlockStyled = styled(BlockWrapper)`
    overflow: hidden;
    box-shadow: 0 0 1px var(--theme-mild-opposite);
    min-height: 480px;

    .left,
    .right {
        height: 100%;
        padding: 22px;
    }

    .right {
        min-width: 350px;
        width: 350px;
    }

    .left {
        min-width: 320px;
        width: 320px;
        background: var(--theme-mild-xxl);
    }

    .logo.second {
        display: none;
    }

    @media (max-width: 675px) {
        max-width: 400px;
        max-height: 90%;
        flex-direction: column-reverse;
        overflow-y: auto;
        justify-content: flex-start;

        .logo.first {
            display: none;
        }

        .logo.second {
            display: block;
        }

        .left,
        .right {
            width: 100%;
        }
    }

    @media (max-width: 400px) {
        box-shadow: none;
        border-radius: 0px;
        height: 100%;
        max-height: 100%;
    }
`

const LoginBlock = () => {
    return (
        <LoginBlockStyled height="fit-content" orientation="horizontal" gap="4px" maxWidth="fit-content" padding="0">
            <Information />
            <Inputs />
        </LoginBlockStyled>
    )
}

export default LoginBlock
