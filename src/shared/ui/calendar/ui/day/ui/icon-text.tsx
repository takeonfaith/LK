import { MEDIA_QUERIES } from '@shared/consts'
import Flex from '@shared/ui/flex'
import Subtext from '@shared/ui/subtext'
import React from 'react'
import styled from 'styled-components'

const IconTextStyled = styled(Flex)<{ shortInfo: boolean }>`
    font-size: ${({ shortInfo }) => `${!shortInfo ? 1 : 0.92}rem`};

    ${MEDIA_QUERIES.isMobile} {
        font-size: ${({ shortInfo }) => `${!shortInfo ? 0.95 : 0.6}rem`};
    }
`

const SmallIcon = styled.div<{ shortInfo: boolean }>`
    opacity: 0.7;
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: ${({ shortInfo }) => (!shortInfo ? 18 : 16)}px;
        height: ${({ shortInfo }) => (!shortInfo ? 18 : 16)}px;
    }

    ${MEDIA_QUERIES.isMobile} {
        svg {
            width: 16px;
            height: 16px;
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
    shortInfo?: boolean
}

const IconText = ({ icon, text, shortInfo = false }: Props) => {
    return (
        <IconTextStyled shortInfo={shortInfo} gap="7px" w="fit-content">
            <SmallIcon shortInfo={shortInfo}>{icon}</SmallIcon>
            <SubtextStyled className="text">{text}</SubtextStyled>
        </IconTextStyled>
    )
}

export default IconText
