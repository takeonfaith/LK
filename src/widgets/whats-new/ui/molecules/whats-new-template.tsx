import useCurrentDevice from '@shared/lib/hooks/use-current-device'
import Subtext from '@shared/ui/subtext'
import { Title } from '@ui/atoms'
import React from 'react'
import styled from 'styled-components'
import { Plate } from '../atoms'
import { WhatsNewPlate } from '../atoms/plate'

const WhatsNewTemplateWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    .image {
        height: fit-content;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px;

        img {
            width: 100%;
            object-fit: cover;
            object-position: center;
        }
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
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;
`

const TemplateText = styled(Subtext)`
    margin-bottom: 20px;
`

interface Props {
    image?: {
        title: string
        mobile?: string
        desktop?: string
        component?: ChildrenType
    }
    text?: string
    list?: WhatsNewPlate[]
}

const WhatsNewTemplate = ({ image, list, text }: Props) => {
    const { isMobile } = useCurrentDevice()

    return (
        <WhatsNewTemplateWrapper>
            {!!image && (
                <>
                    <Title size={3} align="center" bottomGap>
                        {image.title}
                    </Title>
                    <div className="image">
                        {image.component ?? (
                            <img src={isMobile && !!image.mobile ? image.mobile : image.desktop} alt="" />
                        )}
                    </div>
                </>
            )}
            <TemplateText lineHeight="1.6rem" width="100%" align="center" fontSize="1rem" visible={!!text}>
                {text}
            </TemplateText>
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
