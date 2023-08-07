import { Colors, IColors } from '@shared/constants'
import React from 'react'
import styled from 'styled-components'
import { Title } from '../title'
import { Size } from '../types'

const getColorFromValue = (value: number): keyof IColors => {
    if (value === 0) return 'grey'
    if (value <= 40) return 'red'
    if (value <= 60) return 'orange'
    if (value <= 80) return 'blue'
    return 'green'
}

const SIZES: Record<Size, number> = {
    small: 4,
    middle: 9,
    big: 14,
}

const ProgressBarStyled = styled.div<{ value: number; coloring: boolean }>`
    width: 100%;
    h5 {
        color: ${({ coloring, value }) => (coloring ? Colors[getColorFromValue(value)].main : 'var(--text)')};
    }
`

const BarStyled = styled.div<{ value: number; coloring: boolean; size: Size }>`
    width: ${({ value }) => value + '%'};
    border-radius: var(--brLight);
    height: ${({ size }) => SIZES[size]}px;
    transition: 0.2s;
    background: ${({ coloring, value }) => (coloring ? Colors[getColorFromValue(value)].main : 'var(--schedule)')};
`

const Container = styled.div<{ size: Size }>`
    width: 100%;
    border-radius: var(--brLight);
    background-color: var(--scheduleBg);
    height: ${({ size }) => SIZES[size]}px;
    overflow: hidden;
`

interface Props {
    title?: string
    value: number
    coloring?: boolean
    size?: Size
}

const ProgressBar = ({ title, value, size = 'middle', coloring = true }: Props) => {
    return (
        <ProgressBarStyled value={value} coloring={coloring}>
            <Title size={5} align="left" visible={!!title} bottomGap>
                {title}
            </Title>
            <Container size={size}>
                <BarStyled size={size} coloring={coloring} value={value} />
            </Container>
        </ProgressBarStyled>
    )
}

export default ProgressBar
