import { Image } from '@ui/image'
import Subtext from '@ui/subtext'
import { Title } from '@ui/title'
import React from 'react'
import StoryPageWrapper, { StyledProps } from './style'

export type StoryProps = StyledProps & {
    title: string
    text?: string
    image?: string
    children?: ChildrenType
}

const StoryPage = ({
    background,
    align,
    image,
    color,
    title,
    text,
    children,
    setPlaying,
    textAlign = 'left',
}: StoryProps & { currentPage: number; setPlaying: React.Dispatch<React.SetStateAction<boolean>> }) => {
    return (
        <StoryPageWrapper
            onMouseDown={() => setPlaying(false)}
            onMouseUp={() => setPlaying(true)}
            background={background}
            align={align}
            padding="0"
            height="100%"
            color={color}
        >
            {image && <Image src={image} loading={false} width={'auto'} height={'100%'} />}
            <div className="text-content">
                <Title size={3} align={textAlign}>
                    {title}
                </Title>
                <Subtext fontSize="1em" align={textAlign}>
                    {text}
                </Subtext>
                {children && <div className="content-children">{children}</div>}
            </div>
        </StoryPageWrapper>
    )
}

export default StoryPage
