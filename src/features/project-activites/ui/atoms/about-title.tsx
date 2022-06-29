import React from 'react'
import styled from 'styled-components'

interface Props {
    title: string
}

const Container = styled.span`
    color: var(--blue);
    max-width: 70%;
    text-align: center;
`
const AboutTitle = ({ title }: Props) => {
    return (
        <Container>
            <h3>{title}</h3>
        </Container>
    )
}

export default AboutTitle
