import { storyModel } from '@entities/story'
import React from 'react'
import styled from 'styled-components'

interface StyledProps {
    filled?: number
    playing: boolean | null
}

const IndicatorWrapper = styled.div<StyledProps>`
    width: 100%;
    height: 5px;
    background: var(--almostTransparentOpposite);
    border-radius: 10px;
    overflow: hidden;

    .inner-line {
        height: 5px;
        transition: 0.2s;
        width: ${({ filled }) => filled ?? 0 + '%'};
        background: var(--reallyBlue);
        animation: ${({ playing }) => playing !== null && `10s filling linear forwards`};
        animation-play-state: ${({ playing }) => (playing ? 'running' : 'paused')};

        @keyframes filling {
            0% {
                width: 0%;
            }
            100% {
                width: 100%;
            }
        }
    }
`

export type IndicatorProps = StyledProps & {
    onClose: () => void
    isLast: boolean
}

const Indicator = ({ filled, playing, isLast, onClose }: IndicatorProps) => {
    const { currentPage } = storyModel.selectors.useStory()

    return (
        <IndicatorWrapper filled={filled} playing={playing}>
            <div
                className="inner-line"
                onAnimationEnd={() =>
                    !isLast ? storyModel.events.changeCurrentPage({ value: currentPage + 1 }) : onClose()
                }
            />
        </IndicatorWrapper>
    )
}

export default Indicator
