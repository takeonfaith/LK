import styled from 'styled-components'

export const AnimatedCheckWrapper = styled.div<{ size: string; color?: string }>`
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
        background: ${({ color }) => color ?? 'var(--blue)'};
        animation: expand 0.4s cubic-bezier(0.77, 0, 0.175, 1) forwards;
    }

    .circle-blue-shadow {
        position: absolute;
        width: ${({ size }) => size};
        height: ${({ size }) => size};
        border-radius: 50%;
        opacity: 1;
    }

    .circle-white {
        position: absolute;
        top: 3px;
        left: 3px;
        width: ${({ size }) => `calc(${size} - 6px)`};
        height: ${({ size }) => `calc(${size} - 6px)`};
        transform: scale(0);
        border-radius: 50%;
        background: var(--block);
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
        stroke: ${({ color }) => color ?? 'var(--blue)'};
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
