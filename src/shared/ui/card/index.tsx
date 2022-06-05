import BlockWrapper from '@ui/block/styles'
import Subtext from '@ui/subtext'
import { Title } from '@ui/title'
import getShortStirng from '@utils/get-short-string'
import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled(BlockWrapper)`
    border-radius: var(--brLight);
    background: var(--form);
    position: relative;

    .background {
        font-size: 6em;
        position: absolute;
        bottom: 0px;
        right: 10px;
        font-weight: bold;
        /* transform: rotate(-35deg); */
        opacity: 0.5;
    }
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
    width?: string
    height?: string
    background?: ChildrenType
    padding?: string
}

const Card = ({ children, title, text, width, height, background, padding }: Props) => {
    return (
        <CardWrapper
            alignItems="flex-start"
            gap="10px"
            orientation="vertical"
            width={width ?? '15vw'}
            minHeight={height ?? '150px'}
            maxHeight={height ?? '150px'}
            padding={padding}
        >
            <Title size={4} align="left">
                {title}
            </Title>
            <Subtext visible={!!text} fontSize={'0.9em'}>
                {getShortStirng(text ?? '', 60)}
            </Subtext>
            {background && <div className="background">{background}</div>}
            {children && <div className="content">{children}</div>}
        </CardWrapper>
    )
}

export default Card
