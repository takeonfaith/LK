import { Colors, IColors } from '@shared/constants'
import styled from 'styled-components'

export const ColofrulText = styled.span<{ color: keyof IColors }>`
    color: ${({ color }) => (Colors[color as keyof IColors] ? Colors[color as keyof IColors].main : (color as string))};
`
