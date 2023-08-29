import { IColorPalette } from '@shared/consts'
import Flex from '@shared/ui/flex'
import Subtext from '@shared/ui/subtext'
import React from 'react'
import styled from 'styled-components'

const TimeSquare = styled.div`
    min-width: 10px;
    height: 10px;
    border-radius: 10px;
    background: ${({ color }) => color};
`

type Props = {
    timeInterval: string
    color: IColorPalette
}

export const TimeIndicator = ({ timeInterval, color }: Props) => {
    return (
        <Flex w="fit-content" gap="6px">
            <TimeSquare color={color.main} />
            <Subtext>{timeInterval}</Subtext>
        </Flex>
    )
}
