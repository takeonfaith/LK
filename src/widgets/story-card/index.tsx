import { storyModel } from '@entities/story'
import BlockWrapper from '@ui/block/styles'
import { Image } from '@ui/image'
import { StoryProps } from '@ui/story/ui/story-page'
import { Title } from '@ui/title'
import React from 'react'
import styled from 'styled-components'

const StoryCardWrapper = styled(BlockWrapper)<{ color?: string; seen?: boolean; background?: string }>`
    overflow: hidden;
    position: relative;
    background: ${({ background }) => background ?? 'var(--schedule)'};
    cursor: pointer;
    border-radius: var(--brLight);
    min-width: 110px;
    height: 180px;

    .title {
        position: absolute;
        bottom: 10px;
        left: 10px;
        color: ${({ color }) => color ?? 'var(--text)'};
    }
`

interface Props {
    content: StoryProps[]
    seen?: boolean
    title?: string
}

const StoryCard = ({ seen, content, title }: Props) => {
    return (
        <StoryCardWrapper
            width="110px"
            padding="0px"
            height="160px"
            seen={seen}
            background={content[0].background}
            color={content[0].color}
            onClick={() =>
                storyModel.events.open({
                    pages: content,
                })
            }
        >
            {content[0].image && <Image loading={false} height="100%" width="auto" src={content[0].image} />}
            <div className="title">
                <Title size={5}>{title ?? content[0].title}</Title>
            </div>
        </StoryCardWrapper>
    )
}

export default StoryCard
