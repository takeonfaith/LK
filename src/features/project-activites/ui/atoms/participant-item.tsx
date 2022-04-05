import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface Props {
    img: string
    name: string
    id: string
}

const Participant = styled.div`
    width: 100%;
    background: var(--theme);
    margin: 4px 0;
    padding: 10px;
    box-sizing: border-box;
    border-radius: var(--brLight);

    img {
        width: 30px;
        height: 30px;
        margin-right: 7px;
        border-radius: 100%;
        background: var(--blue);
    }

    span {
        width: 100%;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

    &:hover {
        filter: brightness(0.95);
    }

    .link {
        display: flex;
        align-items: center;
        justify-content: flex-start;

        text-decoration: none;
        color: var(--text);
    }
`

export const ParticipantItem = ({ img, name, id }: Props) => {
    return (
        <Participant>
            <Link className="link" to={`/chat/${id}`}>
                <img src={img} alt="" />
                <span>{name}</span>
                {/* {shortWordDisplay(name, 30)} */}
            </Link>
        </Participant>
    )
}
