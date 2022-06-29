import React from 'react'
import styled from 'styled-components'

interface Props {
    isOpen: boolean
    describe: string
}

const Container = styled.div`
    max-width: 80%;
    padding-top: 10px;
    box-sizing: border-box;
    height: 100%;
    max-height: 70%;
    margin-bottom: 30px;
    overflow-y: auto;
    transition: 0.5s;
    padding-bottom: 20px;

    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
    }
`

const Describe = ({ isOpen, describe }: Props) => {
    return (
        <Container
            style={
                !isOpen
                    ? {
                          height: '0%',
                          opacity: '0',
                          visibility: 'hidden',
                          transform: 'scale(0.7)',
                          padding: '0',
                          margin: '0',
                      }
                    : {}
            }
        >
            {describe}
        </Container>
    )
}

export default Describe
