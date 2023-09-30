import { storyModel } from '@entities/story'
import BlockWrapper from '@ui/block/styles'
import { Image } from '@ui/image'
import { StoryProps } from '@ui/story/ui/story-page'
import React from 'react'
import styled from 'styled-components'

const StoryCardWrapper = styled(BlockWrapper)<{ color?: string; seen?: boolean; background?: string }>`
    overflow: hidden;
    position: relative;
    background: ${({ background }) => background ?? 'var(--block)'};
    cursor: pointer;
    border-radius: var(--brLight);
    width: ${({ width }) => width};
    height: ${({ height }) => height};

    .title {
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 0.8rem;
        font-weight: 500;
        color: ${({ color }) => color ?? 'var(--text)'};
    }
`

interface Props {
    content: StoryProps[]
    seen?: boolean
    title?: string
}

const StoryCard = ({ seen, content, title }: Props) => {
    const handleClick = () =>
        storyModel.events.open({
            pages: content,
        })

    return (
        <StoryCardWrapper
            width="100px"
            padding="0px"
            height="130px"
            seen={seen}
            justifyContent="center"
            background={content[0].background}
            color={content[0].color}
            onClick={handleClick}
        >
            {content[0].image && (
                <Image
                    loading={false}
                    height={content[0].imageSize?.height ?? '100%'}
                    width={content[0].imageSize?.width ?? 'auto'}
                    src={content[0].image}
                />
            )}
            <div className="title">{title ?? content[0].title}</div>
        </StoryCardWrapper>
    )
}

export default StoryCard
