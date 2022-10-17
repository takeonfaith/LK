import { storyModel } from '@entities/story'
import { Button } from '@ui/button'
import { ListWrapper } from '@ui/list/styles'
import React from 'react'
import { FiPause, FiPlay, FiX } from 'react-icons/fi'
import styled from 'styled-components'
import Indicator from '../indicator'

const PagesIndicatorWrapper = styled(ListWrapper)`
    position: absolute;
    top: 30px;
    left: 0;
    padding: 0px 30px;
    z-index: 2;

    svg {
        min-width: 20px;
        height: 20px;
    }
`

interface Props {
    playing: boolean
    pages: number
    onClose: () => void
}

const PagesIndicator = ({ playing, pages, onClose }: Props) => {
    const { currentPage } = storyModel.selectors.useStory()
    return (
        <PagesIndicatorWrapper height="10px" verticalAlign="center" direction="horizontal" width="100%">
            {Array(pages)
                .fill(0)
                .map((_, i) => {
                    return (
                        <Indicator
                            onClose={onClose}
                            isLast={i + 1 === pages}
                            key={i}
                            playing={currentPage === i ? playing : null}
                            filled={currentPage > i ? 100 : currentPage === i ? undefined : 0}
                        />
                    )
                })}
            {!playing ? <FiPlay /> : <FiPause />}
            <Button minWidth="25px" width="25px" height="25px" icon={<FiX />} onClick={onClose} />
        </PagesIndicatorWrapper>
    )
}

export default PagesIndicator
