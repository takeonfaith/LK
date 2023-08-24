import { SCREEN_IPHONE_XR } from '@shared/consts'
import Flex from '@shared/ui/flex'
import Subtext from '@shared/ui/subtext'
import React from 'react'
import styled from 'styled-components'

const SmallIcon = styled.div`
    opacity: 0.7;
    width: 18px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 22px;
        height: 22px;
    }

    @media (max-width: ${SCREEN_IPHONE_XR}) {
        svg {
            width: 18px;
            height: 18px;
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
}

const IconText = ({ icon, text }: Props) => {
    return (
        <Flex gap="8px" w="fit-content">
            <SmallIcon>{icon}</SmallIcon>
            <SubtextStyled className="text" fontSize="0.85rem">
                {text}
            </SubtextStyled>
        </Flex>
    )
}

export default IconText
