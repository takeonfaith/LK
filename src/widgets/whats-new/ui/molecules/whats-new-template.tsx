import { Title } from '@ui/atoms'
import useResize from '@utils/hooks/use-resize'
import React from 'react'
import styled from 'styled-components'
import { WhatsNewPlate } from '../atoms/plate'
import { Plate } from '../atoms'

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

const PlateWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
`

interface Props {
    image?: {
        text: string
        mobile?: string
        desktop?: string
    }
    list?: WhatsNewPlate[]
}

const WhatsNewTemplate = ({ image, list }: Props) => {
    const { width } = useResize()

    return (
        <WhatsNewTemplateWrapper>
            {!!image && (
                <>
                    <Title size={4} bottomGap>
                        {image.text}
                    </Title>
                    <img src={width < 1000 && !!image.mobile ? image.mobile : image.desktop} alt="" />
                </>
            )}
            {!!list && (
                <PlateWrapper>
                    {list?.map((el) => {
                        return <Plate {...el} key={el.title} />
                    })}
                </PlateWrapper>
            )}
        </WhatsNewTemplateWrapper>
    )
}

export default WhatsNewTemplate
