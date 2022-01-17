import { Title } from '@ui/atoms'
import useResize from '@utils/hooks/use-resize'
import React from 'react'
import styled from 'styled-components'

const WhatsNewTemplateWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    img {
        width: 100%;
        object-fit: cover;
        object-position: center;
    }

    @media (max-width: 1000px) {
        img {
            width: 100%;
            object-fit: scale-down;
        }
    }
`

interface Props {
    text: string
    image: string
    imageMobile?: string
}

const WhatsNewTemplate = ({ text, image, imageMobile }: Props) => {
    const { width } = useResize()

    return (
        <WhatsNewTemplateWrapper>
            <Title size={4} bottomGap>
                {text}
            </Title>
            <img src={width < 1000 && !!imageMobile ? imageMobile : image} alt="" />
        </WhatsNewTemplateWrapper>
    )
}

export default WhatsNewTemplate
