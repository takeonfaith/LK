import { MESSAGES_ROUTE } from '@app/routes/routes'
import { Colors } from '@consts'
import { Button } from '@ui/button'
import { Title } from '@ui/title'
import React from 'react'
import { FiMessageCircle } from 'react-icons/fi'
import { useHistory } from 'react-router'
import styled from 'styled-components'

interface Props {
    describe: string
    name: string
}

const RightSide = styled.div`
    max-width: 50%;
    height: 100%;

    .description {
        height: 100%;
        overflow-y: auto;
        padding: 20px;
        border-radius: calc(var(--brSemi) - 7px);
        background: var(--theme);
        box-shadow: var(--schedule-shadow);

        @media (max-width: 550px) {
            max-height: 150px;
            padding-bottom: 4px;
            max-width: 100%;
        }
    }

    .message-button {
        display: none;
    }

    .link-button {
        color: #fff;
        text-decoration: none;
    }

    @media (max-width: 550px) {
        height: auto;
        max-width: 100%;

        .description {
            height: fit-content;
            padding: 15px;
        }

        .message-button {
            margin-top: 10px;
            display: flex;
        }
    }
`

const CuratorRightSide = ({ describe, name }: Props) => {
    const history = useHistory()
    return (
        <RightSide>
            <div className="description">
                <Title size={3} align="left" bottomGap>
                    Описание
                </Title>
                {describe}
            </div>
            <div className="message-button">
                <Button
                    icon={<FiMessageCircle />}
                    text={'Написать'}
                    onClick={() => {
                        history.push(`${MESSAGES_ROUTE}/${name}`)
                    }}
                    width="100%"
                    background={Colors.purple.light}
                    textColor="#fff"
                />
            </div>
        </RightSide>
    )
}

export default CuratorRightSide
