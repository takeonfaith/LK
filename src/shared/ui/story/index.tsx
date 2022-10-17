import { storyModel } from '@entities/story'
import useOnClickOutside from '@utils/hooks/use-on-click-outside'
import React, { useRef, useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import styled from 'styled-components'
import ModalWrapper from 'widgets/modal/ui/atoms/modal-wrapper'
import PagesIndicator from './ui/pages-indicator'
import StoryPage from './ui/story-page'

const StoryWrapper = styled.div<{ isOpen: boolean }>`
    padding: 15px;
    width: 100%;
    max-width: 400px;
    height: 100%;
    max-height: 750px;
    transition: 0.2s;
    transform: scale(${({ isOpen }) => (isOpen ? 1 : 0.95)});
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
    position: relative;
    display: flex;

    @media (max-width: 700px) {
        padding: 0;
    }
`

const ClickField = styled.div<{ right?: string; left?: string }>`
    position: absolute;
    top: 50px;
    left: ${({ left }) => left ?? 'auto'};
    right: ${({ right }) => right ?? 'auto'};
    height: calc(100% - 65px);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;
    /* background: red; */
    z-index: 3;
    opacity: 0;

    svg {
        width: 30px;
        height: 30px;
        color: var(--text);
        background: var(--almostTransparentOpposite);
        border-radius: var(--brLight);
    }

    @media (min-width: 1001px) {
        &:hover {
            opacity: 1;
            background: ${({ left }) =>
                left
                    ? 'linear-gradient(90deg, var(--almostTransparentOpposite), transparent)'
                    : 'linear-gradient(90deg, transparent, var(--almostTransparentOpposite))'};
        }
    }

    @media (max-width: 1000px) {
        left: ${({ left }) => `calc(${left} - 15px)` ?? 'auto'};
        right: ${({ right }) => `calc(${right} - 15px)` ?? 'auto'};
        &:active {
            opacity: 1;
            background: ${({ left }) =>
                left
                    ? 'linear-gradient(90deg, var(--almostTransparentOpposite), transparent)'
                    : 'linear-gradient(90deg, transparent, var(--almostTransparentOpposite))'};
        }
    }
`

const Story = () => {
    const { pages, isOpen, currentPage } = storyModel.selectors.useStory()
    const storyRef = useRef<HTMLDivElement>(null)
    useOnClickOutside(storyRef, () => storyModel.events.close())

    const [playing, setPlaying] = useState(true)
    const page = pages[currentPage]

    return (
        <ModalWrapper isOpen={isOpen}>
            <StoryWrapper isOpen={isOpen} ref={storyRef}>
                {pages.length !== 0 && (
                    <>
                        <PagesIndicator
                            pages={pages.length}
                            onClose={() => storyModel.events.close()}
                            playing={playing}
                        />
                        <ClickField
                            left="15px"
                            onClick={() => {
                                currentPage !== 0 && storyModel.events.changeCurrentPage({ value: currentPage - 1 })
                                setPlaying(true)
                            }}
                        >
                            <FiChevronLeft />
                        </ClickField>
                        <StoryPage setPlaying={setPlaying} currentPage={currentPage} {...page} />
                        <ClickField
                            right="15px"
                            onClick={() => {
                                currentPage !== pages.length - 1
                                    ? storyModel.events.changeCurrentPage({ value: currentPage + 1 })
                                    : storyModel.events.close()
                                setPlaying(true)
                            }}
                        >
                            <FiChevronRight />
                        </ClickField>
                    </>
                )}
            </StoryWrapper>
        </ModalWrapper>
    )
}

export default Story
