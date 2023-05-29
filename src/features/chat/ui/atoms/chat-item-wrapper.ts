import { Colors } from '@shared/constants/consts'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ChatItemWrapper = styled(Link)<{ isChosen: boolean; isOpen: boolean }>`
    text-decoration: none;

    .chat-item-content {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        color: ${({ isChosen }) => (isChosen ? '#fff' : 'var(--text)')};
        width: 100%;
        padding: 10px;
        border-radius: var(--brLight);
        background: ${({ isChosen }) => (isChosen ? Colors.blue.main : 'var(--schedule)')};
        overflow: hidden;
        position: relative;

        &:hover {
            filter: brightness(0.95);
        }

        .name-and-message {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100%;
            max-width: 200px;

            & > b {
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                font-size: 0.8em;
            }

            .last-message {
                width: 100%;
                font-size: 0.8em;
                opacity: 0.7;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        }

        .sent-time {
            min-height: 30px;
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: flex-end;
            font-size: 0.8em;
            opacity: 0.6;
            font-weight: 500;
        }
    }
`

export default ChatItemWrapper
