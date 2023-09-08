import React from 'react'
import { IconTextStyled, SmallIcon, SubtextStyled } from './styles'

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
