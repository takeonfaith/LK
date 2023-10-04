import React from 'react'
import { FiAlertTriangle } from 'react-icons/fi'
import { ErrorIconIndicatorStyled } from './styles'
import { ErrorIconIndicatorProps } from './types'

export const ErrorIconIndicator = ({ topRightConrer, onClick, visible }: ErrorIconIndicatorProps) => {
    if (!visible) return null

    return (
        <ErrorIconIndicatorStyled topRightConrer={topRightConrer} onClick={onClick}>
            <FiAlertTriangle />
        </ErrorIconIndicatorStyled>
    )
}
