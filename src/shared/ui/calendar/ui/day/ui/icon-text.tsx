import { SCREEN_IPHONE_XR } from '@shared/consts'
import Flex from '@shared/ui/flex'
import Subtext from '@shared/ui/subtext'
import React from 'react'
import styled from 'styled-components'

const SmallIcon = styled.div<{ scale: number }>`
    opacity: 0.7;
    width: 18px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: ${({ scale }) => `${scale * 22}px`};
        height: ${({ scale }) => `${scale * 22}px`};
    }

    @media (max-width: ${SCREEN_IPHONE_XR}) {
        svg {
            width: ${({ scale }) => `${scale * 18}px`};
            height: ${({ scale }) => `${scale * 18}px`};
        }
    }
`

const SubtextStyled = styled(Subtext)`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

type Props = {
    icon: ChildrenType
    text: ChildrenType
    scale?: number
    shortInfo?: boolean
}

const IconText = ({ icon, text, shortInfo = false, scale = 1 }: Props) => {
    const fontSize = `${(!shortInfo ? 0.85 : 0.7) * scale}rem`
    return (
        <Flex gap="8px" w="fit-content">
            <SmallIcon scale={scale}>{icon}</SmallIcon>
            <SubtextStyled className="text" fontSize={fontSize}>
                {text}
            </SubtextStyled>
        </Flex>
    )
}

export default IconText
