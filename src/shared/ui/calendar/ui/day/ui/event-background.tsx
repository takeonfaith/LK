import React from 'react'
import styled from 'styled-components'

const EventBackgroundStyled = styled.div<{ background: string }>`
    background: ${({ background }) => background};
    position: absolute;
    width: 100%;
    height: 100%;
    inset: 0;
    z-index: -1;
    overflow: hidden;
`

const Icons = styled.div`
    position: absolute;
    right: 0;
    width: 70%;
    top: 0;
    height: 100%;
    z-index: 1;

    & > div {
        top: 50%;
        left: 50%;
        position: inherit;
    }

    & > div:nth-child(1) {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0.04;
        svg {
            width: 170px;
            height: 170px;
        }
    }
    & > div:nth-child(2) {
        opacity: 0.03;
        transform: translate(100px, -90px);
        svg {
            width: 100px;
            height: 100px;
        }
    }

    & > div:nth-child(3) {
        opacity: 0.02;
        transform: translate(-175px, 0px);
        svg {
            width: 70px;
            height: 70px;
        }
    }

    & > div:nth-child(4) {
        opacity: 0.01;
        transform: translate(90px, 10px);
        svg {
            width: 50px;
            height: 50px;
        }
    }
`

type Props = {
    icon: ChildrenType
    background: string
}

const EventBackground = ({ icon, background }: Props) => {
    return (
        <EventBackgroundStyled background={background}>
            <Icons>
                <div>{icon}</div>
                <div>{icon}</div>
                <div>{icon}</div>
                <div>{icon}</div>
            </Icons>
        </EventBackgroundStyled>
    )
}

export default EventBackground
