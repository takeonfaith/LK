import { Colors } from '@consts'
import styled from 'styled-components'

const DragAndDropAreaWrapper = styled.label<{ showPulse: boolean; isActive: boolean; topPadding: boolean }>`
    width: 100%;
    min-height: 150px;
    border-radius: var(--brLight);
    transition: 0.2s border;
    border: ${({ showPulse }) => (!showPulse ? `2px dashed ${Colors.grey.main}` : `2px dashed ${Colors.blue.main}`)};
    background: ${({ showPulse }) => (showPulse ? Colors.blue.transparent3 : '')};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: ${({ isActive }) => isActive && 'pointer'};
    pointer-events: ${({ isActive }) => !isActive && 'none'};
    opacity: ${({ isActive }) => !isActive && 0.4};
    position: relative;

    .info {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        padding: 4px;
        border-radius: var(--brLight);
        background: red;
        pointer-events: none;
        width: calc(100% + 6px);

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
        color: var(--text);
        pointer-events: none;

        .front-icon {
            z-index: 2;
        }

        .icons-behind {
            z-index: 1;
            position: absolute;
            filter: grayscale(1);
            opacity: 0.7;
            transform: scale(0.8);

            & .icon-1 {
                opacity: 0;
                animation: ${({ showPulse }) => (showPulse ? 'behind-1 0.5s forwards' : '')};
            }
            & .icon-2 {
                opacity: 0;
                animation: ${({ showPulse }) => (showPulse ? 'behind-2 0.5s forwards' : '')};
            }

            @keyframes behind-1 {
                0% {
                    opacity: 0;
                    transform: translate(10px, -15px) rotate(0deg);
                }
                100% {
                    opacity: 1;
                    transform: translate(-3px, -15px) rotate(-10deg);
                }
            }
            @keyframes behind-2 {
                0% {
                    opacity: 0;
                    transform: translate(-10px, -15px) rotate(0deg);
                }
                100% {
                    opacity: 1;
                    transform: translate(3px, -15px) rotate(10deg);
                }
            }
        }

        svg {
            width: 40px;
            height: 40px;
            margin-bottom: 10px;
            transition: 0.2s;
            animation: ${({ showPulse }) => (showPulse ? 'jumping 1s forwards' : '')};

            @keyframes jumping {
                0% {
                    transform: translateY(0%);
                }
                100% {
                    transform: translateY(-5%) scale(1.1);
                }
            }
        }
    }
`

export default DragAndDropAreaWrapper
