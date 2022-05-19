import { MESSAGES_ROUTE } from '@app/routes/techers-routes'
import { Colors } from '@consts'
import Avatar from '@features/home/ui/molecules/avatar'
import { Button } from '@ui/button'
import { Title } from '@ui/title'
import React from 'react'
import { FiMessageCircle } from 'react-icons/fi'
import { useHistory } from 'react-router'
import styled from 'styled-components'

interface Props {
    id: string
    img: string
    name: string
    title: string
}

const LeftSide = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 0.7rem;

    .title-and-name {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;

        p {
            opacity: 0.7;
            font-weight: 500;
            font-size: 0.9rem;
        }
    }

    @media (max-width: 550px) {
        width: 100%;
        height: auto;

        .message-button {
            display: none;
        }
    }
`

const CuratorLeftSide = ({ img, name, title, id }: Props) => {
    const history = useHistory()
    return (
        <LeftSide>
            <Avatar name={name} avatar={img} width="100px" height="100px" marginRight="0" />
            <div className="title-and-name">
                <Title size={3}>{name}</Title>
                <p>{title}</p>
            </div>
            <div className="message-button">
                <Button
                    icon={<FiMessageCircle />}
                    text={'Написать'}
                    onClick={() => {
                        history.push(`${MESSAGES_ROUTE}/${name}`)
                    }}
                    width="130px"
                    background={Colors.purple.light}
                    textColor="#fff"
                />
            </div>
        </LeftSide>
    )
}

export default CuratorLeftSide
