import styled from 'styled-components'

export const CalendarWrapper = styled.div<{ listView: boolean }>`
    padding-left: ${({ listView }) => (listView ? '0' : ' var(--time-width)')};
    position: relative;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    display: flex;
    /* gap: 6px; */
    &::-webkit-scrollbar {
        display: none;
    }
`
