import React, { useEffect } from 'react'
import { AiOutlineReload } from 'react-icons/ai'
import styled from 'styled-components'
import { Button, Loading, Title } from '.'

const WrapperBlock = styled.div<{ loading: boolean }>`
    width: 100%;
    padding: 10px;
    height: 100%;

    .loading {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        transition: 0.2s;
        opacity: ${({ loading }) => (loading ? 1 : 0)};
        visibility: ${({ loading }) => (loading ? 'visible' : 'hidden')};
        transform: scale(${({ loading }) => (loading ? '1' : '0.98')});
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 40px;
        }
    }

    .content {
        transition: 0.2s;
        opacity: ${({ loading }) => (loading ? 0 : 1)};
        visibility: ${({ loading }) => (loading ? 'hidden' : 'visible')};
        transform: scale(${({ loading }) => (loading ? '0.98' : '1')});
        height: 100%;
    }

    .reload {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: var(--text);

        & > * + * {
            margin-top: 10px;
        }
    }
`

interface Props {
    children?: JSX.Element[] | JSX.Element | string | null
    load: () => void
    loading: boolean
    error: string | null
    data: any | null
    deps?: any[]
}

const Wrapper = ({ children, load, loading = false, error, data, deps = [] }: Props) => {
    useEffect(() => {
        if (!data) load()
    }, deps)

    return (
        <WrapperBlock loading={!!error || loading}>
            <span className="loading">
                {!error ? (
                    <Loading />
                ) : (
                    <div className="reload">
                        <Title size={3}>{!!error && error}</Title>
                        <Button onClick={() => load()} text="Загрузить снова" icon={<AiOutlineReload />} />
                    </div>
                )}
            </span>
            <div className="content">{children}</div>
        </WrapperBlock>
    )
}

export default Wrapper
