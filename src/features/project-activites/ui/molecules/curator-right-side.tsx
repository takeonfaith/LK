import { Button } from '@ui/button'
import { Title } from '@ui/title'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface Props {
    describe: string
    id: string
}

const RightSide = styled.div`
    max-width: 50%;
    height: 100%;
    padding: 20px;
    border-radius: calc(var(--brSemi) - 7px);
    background: var(--theme);
    box-shadow: var(--schedule-shadow);
    overflow: hidden;

    .description {
        height: 100%;
        max-height: calc(100% - 45px);
        overflow-y: auto;
        padding-bottom: 20px h3 {
            margin-bottom: 10px;
        }

        &::-webkit-scrollbar {
            width: 12px;
        }
    }

    .link-button {
        color: #fff;
        text-decoration: none;
    }
`

const CuratorRightSide = ({ describe, id }: Props) => {
    return (
        <RightSide>
            <div className="description">
                <Title size={3} align="left" bottomGap>
                    Описание
                </Title>
                {describe}
            </div>
            <Link className="link-button" to={`/chat/${id}`}>
                <Button
                    textColor="#fff"
                    text="Написать"
                    background="linear-gradient(45deg, #8d6bb8, #dd708a)"
                    width="100%"
                />
            </Link>
        </RightSide>
    )
}

export default CuratorRightSide
