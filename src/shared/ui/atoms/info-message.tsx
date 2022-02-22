import React from 'react'
import { FiInfo } from 'react-icons/fi'
import styled from 'styled-components'
import { useModal } from 'widgets'
import { Title } from '.'

const InfoMessageWrapper = styled.div`
    font-size: 0.8em;
    opacity: 0.7;
    padding: 10px;
    color: var(--info-blue);
    background: #3d5bcd47;
    border-radius: var(--brLight);
    position: relative;
    padding-right: 35px;

    .icon {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 10px;

        svg {
            width: 20px;
            height: 20px;
        }
    }
`

interface Props {
    condition: boolean
    title: string
    text?: string
}

const InfoMessage = ({ condition, title, text }: Props) => {
    const { open } = useModal()
    return condition ? (
        <InfoMessageWrapper>
            <div className="title-and-icon">
                <Title size={5} align="left" icon={<FiInfo />} bottomGap>
                    {title}
                </Title>
            </div>
            <div className="info-text">{text}</div>
        </InfoMessageWrapper>
    ) : null
}

export default InfoMessage
