import styled from 'styled-components'

const findOpacity = (isCurrent: boolean, isFull: boolean, isVisible: boolean) => {
    if (isFull) {
        return isCurrent ? 1 : 0.8
    } else {
        return isVisible ? 1 : 0
    }
}

const findScale = (isVisible: boolean) => {
    return isVisible ? 1 : 0.9
}

const DayScheduleWrapper = styled.div<{
    isCurrent: boolean
    isFull: boolean
    isVisible: boolean
    width?: number | undefined
    height?: number | undefined
}>`
    display: flex;
    flex-direction: column;
    min-width: ${({ width, isFull }) => (!!width ? width + 'px' : isFull ? 'calc(100% / 6 - 9px)' : '400px')};
    width: ${({ width, isFull }) => (!!width ? width + 'px' : isFull ? 'calc(100% / 6)' : '400px')};
    height: ${({ height }) => (!!height ? height + 'px' : 'fit-content')};
    transition: 0.2s;
    color: var(--text);
    opacity: ${({ isCurrent, isFull, isVisible }) => findOpacity(isCurrent, isFull, isVisible)};
    transform: scale(${({ isVisible }) => findScale(isVisible)});
    overflow-y: auto;

    .day-title {
        display: flex;
        align-items: center;
        column-gap: 10px;
        margin-bottom: 5px;
        margin-left: 10px;
        width: calc(100% - 20px);
        justify-content: space-between;

        h4 {
            color: ${({ isCurrent }) => (isCurrent ? 'var(--blue)' : 'var(--text)')};
        }

        span {
            font-weight: 500;
            opacity: 0.7;
            font-size: 0.9em;
            width: 90px;
            text-align: center;
        }
    }

    @media (max-width: 1000px) {
        transition: 0.5s opacity;
        opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
        width: 100%;
        min-width: 100%;
        scroll-snap-align: start;
        transform: scale(1);
    }
`

export default DayScheduleWrapper
