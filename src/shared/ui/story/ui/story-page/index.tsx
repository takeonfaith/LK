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
    imageSize?: { width: string; height: string }
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
    imageAlign,
    imageSize = { width: 'auto', height: '100%' },
    textAlign = 'left',
}: StoryProps & { currentPage: number; setPlaying: React.Dispatch<React.SetStateAction<boolean>> }) => {
    return (
        <StoryPageWrapper
            imageAlign={imageAlign}
            onClick={() => setPlaying((prev) => !prev)}
            background={background}
            align={align}
            padding="0"
            height="100%"
            color={color}
        >
            {image && <Image src={image} loading={false} width={imageSize.width} height={imageSize.height} />}
            <div className="text-content">
                <Title size={2} align={textAlign}>
                    {title}
                </Title>
                <Subtext fontSize="1.1em" align={textAlign}>
                    {text}
                </Subtext>
                {children && <div className="content-children">{children}</div>}
            </div>
        </StoryPageWrapper>
    )
}

export default StoryPage
