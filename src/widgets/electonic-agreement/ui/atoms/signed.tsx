import { Colors } from '@consts'
import React from 'react'
import { FiCheck } from 'react-icons/fi'
import styled from 'styled-components'

const SignedWrapper = styled.div<{ show: boolean; disabledMargin: boolean }>`
    background: ${Colors.green.transparent};
    color: ${Colors.green.main};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--brLight);
    width: 100%;
    font-weight: 600;
    margin-top: ${({ show, disabledMargin }) => (show && !disabledMargin ? '20px' : '0')};
    opacity: ${({ show }) => (show ? 1 : 0)};
    height: ${({ show }) => (show ? '60px' : '0')};
    visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
`

interface Props {
    show: boolean
    disabledMargin?: boolean
}

const Signed = ({ show, disabledMargin = false }: Props) => {
    return (
        <SignedWrapper show={show} disabledMargin={disabledMargin}>
            <FiCheck />
            Успешно подписано
        </SignedWrapper>
    )
}

export default Signed
