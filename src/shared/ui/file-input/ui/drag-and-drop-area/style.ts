import { Colors } from '@consts'
import styled from 'styled-components'

const DragAndDropAreaWrapper = styled.label<{ showPulse: boolean; isActive: boolean; topPadding: boolean }>`
    width: 100%;
    min-height: 150px;
    border-radius: var(--brLight);
    background: ${Colors.blue.transparent2};
    border: ${({ showPulse }) => (!showPulse ? `3px dashed ${Colors.blue.main}` : `5px solid ${Colors.blue.main}`)};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: ${({ isActive }) => isActive && 'pointer'};
    pointer-events: ${({ isActive }) => !isActive && 'none'};
    opacity: ${({ isActive }) => !isActive && 0.4};
    position: relative;

    .info {
        left: 10px;
        top: 10px;
        position: absolute;
        display: flex;
        gap: 5px;
        pointer-events: none;

        .info-item {
            padding: 5px 10px;
            background: var(--schedule);
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.7em;
            font-weight: 600;
            pointer-events: none;
        }
    }

    input[type='file'] {
        display: none;
    }

    .message {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        opacity: 0.7;
        color: ${Colors.blue.light2};
        pointer-events: none;

        svg {
            width: 40px;
            height: 40px;
            margin-bottom: 10px;
        }
    }
`

export default DragAndDropAreaWrapper
