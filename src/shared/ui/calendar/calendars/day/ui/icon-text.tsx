import React from 'react'
import { IconTextStyled, SmallIcon, SubtextStyled } from './styles'

type Props = {
    icon: ChildrenType
    text: ChildrenType
    shortInfo?: boolean
    rightIcon?: ChildrenType
    onClick?: () => void
}

const IconText = ({ icon, text, onClick, rightIcon, shortInfo = false }: Props) => {
    return (
        <IconTextStyled onClick={onClick} shortInfo={shortInfo} gap="7px" w="fit-content">
            <SmallIcon shortInfo={shortInfo}>{icon}</SmallIcon>
            <SubtextStyled width="100%" className="text">
                {text}
            </SubtextStyled>
            <SmallIcon shortInfo={shortInfo}>{rightIcon}</SmallIcon>
        </IconTextStyled>
    )
}

export default IconText
