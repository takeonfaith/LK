import React from 'react'
import { Colors } from '@consts'
import { userModel } from '@entities/user'
import { Error } from '@ui/error'
import { Loading } from '@ui/loading'
import { Logo } from '@ui/logo'
import styled from 'styled-components'
import { Button } from '@ui/button'
import { AiOutlineReload } from 'react-icons/ai'
import { UserToken } from '@api/model'

const styledPropsArray: Array<keyof Props> = ['loading']

const InitialLoaderWrapper = styled.div.withConfig({
    shouldForwardProp: (prop) => !styledPropsArray.includes(prop as keyof Props),
})<{ loading: boolean }>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, var(--theme), var(--theme), var(--theme), ${Colors.blue.main}, var(--theme));
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${({ loading }) => !loading && 'load_finished 1.8s forwards reverse'};
    animation-delay: 0.8s;
    background-size: 500% 500%;
    flex-direction: column;

    .loading-circle {
        width: 40px;
        height: 40px;
        bottom: 40px;
        position: absolute;
        opacity: 0.7;
    }

    @keyframes logo {
        0% {
            filter: invert(var(--invert));
            transform: scale(1);
            opacity: 1;
        }
        100% {
            filter: invert(var(--double-invert));
            opacity: 0;
            transform: scale(0.9);
        }
    }

    @keyframes load_finished {
        0% {
            background-size: 100% 12000%;
            opacity: 0;
            visibility: hidden;
        }
        20% {
            background-size: 100% 12000%;
            opacity: 0;
            visibility: hidden;
        }
        50% {
            background-size: 100% 12000%;
            opacity: 1;
            visibility: visible;
        }
        100% {
            background-size: 500% 500%;
            opacity: 1;
            visibility: visible;
        }
    }

    img {
        animation: ${({ loading }) => !loading && 'logo 0.6s forwards'};
        animation-delay: ${({ loading }) => (loading ? '0s' : '1s')};
        width: 100px;
    }

    @media (max-width: 1000px) {
        background-size: 700% 100%;
        @keyframes load_finished {
            0% {
                background-size: 100% 12000%;
                opacity: 0;
                visibility: hidden;
            }
            100% {
                background-size: 700% 100%;
                opacity: 1;
                visibility: visible;
            }
        }
    }
`

interface Props {
    loading: boolean
}

const InitialLoader = ({ loading }: Props) => {
    const { error } = userModel.selectors.useUser()

    if (!!error)
        return (
            <InitialLoaderWrapper loading={true}>
                <Error text="Нет подключения к интернету">
                    <Button
                        onClick={() =>
                            userModel.effects.getUserFx(JSON.parse(localStorage.getItem('token') ?? '') as UserToken)
                        }
                        text="Попробовать снова"
                        icon={<AiOutlineReload />}
                    />
                </Error>
            </InitialLoaderWrapper>
        )

    return (
        <InitialLoaderWrapper loading={loading}>
            <Logo short />
            {loading && <Loading />}
        </InitialLoaderWrapper>
    )
}

export default InitialLoader
