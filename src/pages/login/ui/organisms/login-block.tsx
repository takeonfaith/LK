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
