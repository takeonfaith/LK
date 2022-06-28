import { Title } from '@ui/title'
import React from 'react'
import styled from 'styled-components'

interface Props {
    openDescribe: boolean
    theme: string
}

const Container = styled.div`
    height: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    transition: 0.2s;
    text-align: center;
`

const AboutBottom = ({ openDescribe, theme }: Props) => {
    return (
        <Container
            style={openDescribe ? { height: '0%', opacity: '0', visibility: 'hidden', transform: 'scale(0.7)' } : {}}
        >
            Тематика проекта:
            <Title size={4}>{theme}</Title>
        </Container>
    )
}

export default AboutBottom
