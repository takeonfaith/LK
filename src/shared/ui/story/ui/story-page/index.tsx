import { storyModel } from '@entities/story'
import { Button } from '@ui/button'
import { Image } from '@ui/image'
import Subtext from '@ui/subtext'
import { Title } from '@ui/title'
import React from 'react'
import { useHistory } from 'react-router-dom'
import StoryPageWrapper, { StyledProps, TextContent } from './style'

export type StoryProps = StyledProps & {
    title: string
    text?: string
    image?: string
    children?: ChildrenType
    imageSize?: { width: string; height: string }
    link?: {
        text: string
        to: string
    }
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
    link,
    imageAlign,
    imageSize = { width: 'auto', height: '100%' },
    textAlign = 'left',
}: StoryProps & { currentPage: number; setPlaying: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const history = useHistory()
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
            <TextContent
                imageAlign={imageAlign}
                onClick={() => setPlaying((prev) => !prev)}
                background={background}
                align={align}
                color={color}
            >
                <Title size={2} align={textAlign}>
                    {title}
                </Title>
                <Subtext fontSize="1.1em" align={textAlign}>
                    {text}
                </Subtext>
                {!!link?.text && (
                    <Button
                        onClick={() => {
                            history.push(link.to)
                            storyModel.events.close()
                        }}
                        text={link.text}
                    />
                )}
                {children && <div className="content-children">{children}</div>}
            </TextContent>
        </StoryPageWrapper>
    )
}

export default StoryPage
