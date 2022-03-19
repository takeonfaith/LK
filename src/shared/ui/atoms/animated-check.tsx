import React from 'react'
import styled from 'styled-components'

const AnimatedCheckWrapper = styled.div<{ size: string }>`
    .wrapper {
        position: relative;
        width: ${({ size }) => size};
        height: ${({ size }) => size};
    }
    .circle-blue {
        position: absolute;
        width: ${({ size }) => size};
        height: ${({ size }) => size};
        border-radius: 50%;
        background: var(--blue);
        animation: expand 0.4s cubic-bezier(0.77, 0, 0.175, 1) forwards;
    }

    .circle-blue-shadow {
        position: absolute;
        width: ${({ size }) => size};
        height: ${({ size }) => size};
        border-radius: 50%;
        opacity: 1;
        animation: shadowExpand 0.25s cubic-bezier(0.77, 0, 0.175, 1) forwards;
    }

    .circle-white {
        position: absolute;
        top: ${({ size }) => `calc(${size} * 0.07)`};
        left: ${({ size }) => `calc(${size} * 0.07)`};
        width: ${({ size }) => `calc(${size} * 0.86)`};
        height: ${({ size }) => `calc(${size} * 0.86)`};
        transform: scale(0);
        border-radius: 50%;
        background: var(--schedule);
        animation: expand 0.4s 0.5s cubic-bezier(0.77, 0, 0.175, 1) forwards;
    }

    @keyframes expand {
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }

    @keyframes shadowExpand {
        0% {
            top: 0px;
            left: 0px;
            border: 0px solid var(--blue);
            opacity: 1;
            transform: scale(0);
        }
        100% {
            top: ${({ size }) => `calc(${-size} / 2)`};
            left: ${({ size }) => `calc(${-size} / 2)`};
            border: ${({ size }) => `calc(${size} / 2)`} solid var(--blue);
            opacity: 0;
            transform: scale(1);
        }
    }

    .check-svg {
        position: absolute;
        width: ${({ size }) => `calc(${size} + 10px)`};
        height: ${({ size }) => `calc(${size} + 10px)`};
        top: -18px;
        left: -20px;
        width: 50px;
        height: 50px;
        top: -13px;
        left: -14px;
        transform-origin: center;
        animation: 0.4s cubic-bezier(0.77, 0, 0.175, 1) 0.4s 1 both scaleCheck;
    }

    .check-poly {
        fill: transparent;
        stroke-width: 3;
        stroke-dasharray: 36px 36px;
        stroke: var(--blue);
        animation: 1s cubic-bezier(0.77, 0, 0.175, 1) 0.4s 1 both drawCheck;
    }

    @keyframes scaleCheck {
        0% {
            opacity: 0;
        }
        1% {
            opacity: 1;
        }
        100% {
            transform: scale(0.8);
        }
    }

    @keyframes drawCheck {
        0% {
            stroke-dashoffset: 36px;
        }
        100% {
            stroke-dashoffset: 0;
        }
    }
`

interface Props {
    size: string
}

const AnimatedCheck = ({ size }: Props) => {
    return (
        <AnimatedCheckWrapper size={size}>
            <div className="wrapper">
                <div className="circle-blue">
                    <div className="circle-white"></div>
                </div>
                <div className="circle-blue-shadow"></div>
                <svg className="check-svg" width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                    <polyline className="check-poly" points="26 37 34 43 47 27" strokeLinecap="round" />
                </svg>
            </div>
        </AnimatedCheckWrapper>
    )
}

export default AnimatedCheck
