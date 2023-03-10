import React, { useCallback, useState } from 'react'
import styled from 'styled-components'

const TOP_HEIGHT = 300

const WrapperStyled = styled.section`
    width: 100%;
    height: 100vh;
    padding-top: ${TOP_HEIGHT}px;
`

const TopStyled = styled.header<{ scrollValue: number }>`
    background-color: blue;
    height: ${TOP_HEIGHT}px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: ${({ scrollValue }) => 1 - scrollValue / 300};
    transform: translateY(${({ scrollValue }) => -scrollValue / 10}px);
    overflow: hidden;

    img {
        width: 100%;
        object-fit: contain;
    }
`

const ContentWrapperStyled = styled.div<{ scrollValue: number }>`
    background: var(--scheduleBg);
    color: var(--text);
    height: calc(100vh - ${({ scrollValue }) => TOP_HEIGHT - scrollValue}px);
    overflow-y: auto;
    transform: translateY(${({ scrollValue }) => -scrollValue}px);
    padding: 100px 200px;

    &::-webkit-scrollbar {
        display: none;
    }
`

const ContentStyled = styled.div`
    /* height: 200vh; */
`

type Props = {
    children: ChildrenType
}

const ParallaxPageLayout = ({ children }: Props) => {
    const [scrollValue, setScrollValue] = useState<number>(0)

    const handleScroll = useCallback((e: React.UIEvent<HTMLElement, UIEvent>) => {
        if (e.currentTarget.scrollTop < TOP_HEIGHT) {
            setScrollValue(e.currentTarget.scrollTop)
        } else setScrollValue(TOP_HEIGHT)
    }, [])

    return (
        <WrapperStyled>
            <TopStyled scrollValue={scrollValue}>
                <img
                    src="https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/advice/maps-satellite-images/satellite-image-of-globe.jpg"
                    alt=""
                />
            </TopStyled>
            <ContentWrapperStyled onScroll={handleScroll} scrollValue={scrollValue}>
                <ContentStyled>{children}</ContentStyled>
            </ContentWrapperStyled>
        </WrapperStyled>
    )
}

export default ParallaxPageLayout
