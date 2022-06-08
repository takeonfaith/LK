import styled from 'styled-components'

export const TooltipWrapper = styled.div`
    display: inline-block;
    position: relative;

    .box {
        /* Absolute positioning */
        overflow: hidden;
        position: absolute;
        border-radius: 4px;
        left: 50%;
        transform: translateX(-50%);
        padding: 6px;
        color: #fff;
        background: #000;
        font-size: 0.8em;
        font-weight: 600;
        line-height: 1;
        z-index: 100;
        white-space: nowrap;

        /* CSS border triangles */
        &::before {
            content: ' ';
            left: 50%;
            border: solid transparent;
            height: 0;
            width: 0;
            position: absolute;
            pointer-events: none;
            border-width: 6px;
            margin-left: calc(6px * -1);
        }

        /* Absolute positioning */
        &.top {
            animation: 0.2s topFade forwards;
        }
        /* CSS border triangles */
        &.top::before {
            top: 100%;
            border-top-color: #000;
        }

        /* Absolute positioning */
        &.right {
            animation: 0.2s rightFade forwards;
        }
        /* CSS border triangles */
        &.right::before {
            left: calc(6px * -1);
            top: 50%;
            transform: translateX(0) translateY(-50%);
            border-right-color: #000;
        }

        /* Absolute positioning */
        &.bottom {
            animation: 0.2s bottomFade forwards;
        }
        /* CSS border triangles */
        &.bottom::before {
            bottom: 100%;
            border-bottom-color: #000;
        }

        /* Absolute positioning */
        &.left {
            animation: 0.2s leftFade forwards;
        }
        /* CSS border triangles */
        &.left::before {
            left: auto;
            right: calc(6px * -2);
            top: 50%;
            transform: translateX(0) translateY(-50%);
            border-left-color: #000;
        }

        @keyframes topFade {
            0% {
                opacity: 0;
                left: 50%;
                top: -20px;
                transform: translateX(-50%);
            }
            100% {
                opacity: 1;
                top: calc(30px * -1);
            }
        }

        @keyframes bottomFade {
            0% {
                opacity: 0;
                left: 50%;
                bottom: -20px;
                transform: translateX(-50%);
            }
            100% {
                opacity: 1;
                bottom: calc(30px * -1);
            }
        }

        @keyframes leftFade {
            0% {
                opacity: 0;
                left: auto;
                right: 50%;
                top: 50%;
                transform: translateX(0) translateY(-50%);
            }
            100% {
                left: auto;
                right: calc(100% + 30px);
                top: 50%;
                transform: translateX(0) translateY(-50%);
            }
        }

        @keyframes rightFade {
            0% {
                opacity: 0;
                left: 50%;
                top: 50%;
                transform: translateX(0) translateY(-50%);
            }
            100% {
                left: calc(100% + 10px);
                top: 50%;
                transform: translateX(0) translateY(-50%);
            }
        }
    }
`
