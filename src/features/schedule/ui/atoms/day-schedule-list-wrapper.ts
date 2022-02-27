import styled from 'styled-components'

const DayScheduleListWrapper = styled.div<{ isFull: boolean; height: number }>`
    border-radius: 15px;
    overflow: hidden;
    box-shadow: var(--schedule-shadow);
    padding: 6px;
    background: var(--scheduleBg);
    display: flex;
    flex-direction: column;
    row-gap: 6px;
    overflow-y: auto;
    scroll-snap-type: y proximity;
    max-height: ${({ height }) => `calc(${height}px - 325px)`};

    &::-webkit-scrollbar {
        width: 0;
    }

    @media (max-width: 1000px) {
        max-height: ${({ height }) => `calc(${height}px - 240px)`};
    }
`

export default DayScheduleListWrapper
