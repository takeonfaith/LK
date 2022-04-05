import React from 'react'
import styled from 'styled-components'
import { FaStar } from 'react-icons/fa'

interface Props {
    stars: number
    needHide: boolean
}

const Container = styled.div`
    position: absolute;
    right: -3px;
    top: 20px;
    padding: 10px 20px;
    background: var(--reallyBlue);
    border-radius: var(--brLight) 5px 5px var(--brLight);
    color: #fff;
    transition: 0.2s opacity, 0.2s transform;
`

const Stars = ({ stars, needHide }: Props) => {
    return (
        <Container style={needHide ? { opacity: '0', transform: 'translateY(-10px)' } : {}}>
            {stars !== 0 ? Array(stars).fill(<FaStar />) : 'Нет звезд'}
        </Container>
    )
}

export default Stars
