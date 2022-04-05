import { Button } from '@ui/button'
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
    border-radius: 24px;
    background: var(--theme);
    box-sizing: border-box;
    overflow: hidden;

    .description {
        height: 100%;
        max-height: calc(100% - 45px);
        overflow-y: auto;
        padding-bottom: 20px;
        box-sizing: border-box;

        h3 {
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
                <h3>Описание</h3>
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
