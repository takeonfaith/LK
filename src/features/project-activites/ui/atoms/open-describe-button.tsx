import React from 'react'
import { FaInfoCircle, FaTimes } from 'react-icons/fa'
import styled from 'styled-components'

interface Props {
    handleOpen: () => void
    isOpen: boolean
}

const Container = styled.button`
    position: absolute;
    border: none;
    outline: none;
    left: 20px;
    top: 28px;
    width: 28px;
    height: 28px;
    border-radius: 100%;
    background: var(--settings_Color);
    color: grey;
    cursor: pointer;
    padding: 0;

    &:hover {
        filter: brightness(0.8);
    }
`

const OpenDescribeButton = ({ handleOpen, isOpen }: Props) => {
    return <Container onClick={handleOpen}>{isOpen ? <FaTimes size={14} /> : <FaInfoCircle size={14} />}</Container>
}

export default OpenDescribeButton
