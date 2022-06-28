import styled from 'styled-components'

const DayScheduleListWrapper = styled.div<{ isFull: boolean; height: number; isTeacherSchedule: boolean }>`
    border-radius: 15px;
    overflow: hidden;
    padding: 6px;
    background: var(--scheduleBg);
    display: flex;
    flex-direction: column;
    row-gap: 6px;
    overflow-y: auto;
    scroll-snap-type: y proximity;
    height: 100%;
    max-height: ${({ height }) => `calc(${height}px - 325px)`};

    &::-webkit-scrollbar {
        width: 0;
    }

    @media (max-width: 1000px) {
        max-height: ${({ height, isTeacherSchedule }) => `calc(${height}px - ${isTeacherSchedule ? 340 : 240}px)`};
    }
`

export default DayScheduleListWrapper
