import { Colors } from '@consts'
import React from 'react'
import { FiInfo } from 'react-icons/fi'
import styled from 'styled-components'
import { Title } from '.'

const InfoMessageWrapper = styled.div`
    font-size: 0.8em;
    opacity: 0.7;
    padding: 10px;
    border: 2px solid ${Colors.blue.main};
    color: var(--text);
    border-radius: var(--brLight);
`

interface Props {
    condition: boolean
    title: string
    text?: string
}

const InfoMessage = ({ condition, title, text }: Props) => {
    return condition ? (
        <InfoMessageWrapper>
            <div className="title-and-icon">
                <Title size={5} align="left" icon={<FiInfo />} bottomGap>
                    {title}
                </Title>
            </div>
            {text}
        </InfoMessageWrapper>
    ) : null
}

export default InfoMessage
