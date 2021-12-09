import React from 'react'
import styled from 'styled-components'
import { Colors } from '@consts'

const ErrorMessageWrapper = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    border-radius: 5px;
    background: ${Colors.red.transparent};
    border: 1px solid ${Colors.red.transparent};
    color: ${Colors.red.main};
    padding: 10px;
    font-weight: bold;
`

interface Props {
    message: string
}

const ErrorMessage = ({ message }: Props) => {
    return !!message ? <ErrorMessageWrapper>{message}</ErrorMessageWrapper> : null
}

export default ErrorMessage
