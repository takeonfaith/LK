import { userModel } from '@entities/user'
import BlockWrapper from '@ui/block/styles'
import styled from 'styled-components'
import Information from '../molecules/information'
import Inputs from '../molecules/inputs'

const LoginBlockStyled = styled(BlockWrapper)<{ isAuthenticated: boolean }>`
    overflow: hidden;
    box-shadow: ${({ isAuthenticated }) => (!isAuthenticated ? '0 0 1px var(--theme-mild-opposite)' : 'none')};
    min-height: 480px;
    transition: 0.2s box-shadow;
    position: relative;
    background: ${({ isAuthenticated }) => (isAuthenticated ? 'var(--theme)' : 'var(--schedule)')};

    .left,
    .right {
        height: 100%;
        padding: 22px;
    }

    .right {
        min-width: 350px;
        width: 350px;
        opacity: ${({ isAuthenticated }) => +!isAuthenticated};
    }

    .left {
        min-width: 320px;
        width: 320px;
        transition: 0.2s background, 0.2s opacity;
        background: ${({ isAuthenticated }) => (isAuthenticated ? 'var(--theme)' : 'var(--theme-mild-xxl)')};
        padding-top: ${({ isAuthenticated }) => (isAuthenticated ? '60px' : '22px')};

        & > * > * > *:not(.logo) {
            opacity: ${({ isAuthenticated }) => +!isAuthenticated};
        }
    }

    .logo {
        transform-origin: left;
    }

    .logo.first {
        z-index: 100;
        animation: ${({ isAuthenticated }) => isAuthenticated && 'logoMove 0.8s forwards ease-in-out'};

        @keyframes logoMove {
            0% {
                position: absolute;
                top: 22px;
                left: 22px;
                transform: scale(1) translateY(0%) translateX(0%);
            }
            100% {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: scale(2) translateY(-25%) translateX(-50%);
            }
        }
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

        .left {
            padding-top: 22px;
        }

        .logo.first {
            display: none;
        }

        .logo.second {
            display: block;
            z-index: 100;
            animation: ${({ isAuthenticated }) => isAuthenticated && 'logoMoveMobile 0.8s forwards ease-in-out'};

            @keyframes logoMoveMobile {
                0% {
                    position: absolute;
                    top: 22px;
                    left: 50%;
                    transform: scale(1) translateY(0%) translateX(-50%);
                }
                100% {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: scale(2) translateY(-50%) translateX(-50%);
                }
            }
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
    const {
        data: { isAuthenticated },
    } = userModel.selectors.useUser()
    return (
        <LoginBlockStyled
            isAuthenticated={isAuthenticated ?? false}
            height="fit-content"
            orientation="horizontal"
            gap="4px"
            maxWidth="fit-content"
            padding="0"
        >
            <Information />
            <Inputs />
        </LoginBlockStyled>
    )
}

export default LoginBlock
