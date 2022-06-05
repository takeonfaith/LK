import BlockWrapper from '@ui/block/styles'
import Subtext from '@ui/subtext'
import { Title } from '@ui/title'
import getShortStirng from '@utils/get-short-string'
import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled(BlockWrapper)`
    border-radius: var(--brLight);
    .content {
        height: 100%;
        display: flex;
        align-items: flex-end;
    }
`

type Props = {
    title: string
    text?: string
    children?: ChildrenType
}

const Card = ({ children, title, text }: Props) => {
    return (
        <CardWrapper
            alignItems="flex-start"
            gap="10px"
            orientation="vertical"
            maxWidth="300px"
            width="15vw"
            minHeight="150px"
            maxHeight="150px"
        >
            <Title size={4} align="left">
                {title}
            </Title>
            <Subtext visible={!!text} fontSize={'0.9em'}>
                {getShortStirng(text ?? '', 60)}
            </Subtext>
            {children && <div className="content">{children}</div>}
        </CardWrapper>
    )
}

export default Card
