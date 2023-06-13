import { Colors, messageType } from '@consts'
import { Align, MessageType } from '@ui/types'
import styled from 'styled-components'

// const getBackground = (isLightTheme: boolean, type: MessageType, solidBackground: boolean) =>
//     isLightTheme
//         ? Colors[messageType[type].color][solidBackground ? 'transparent' : 'transparent3']
//         : Colors[messageType[type].color][solidBackground ? 'transparent' : 'transparent3']

const getColor = (isLightTheme: boolean, type: MessageType, solidBackground: boolean) =>
    solidBackground
        ? '#fff'
        : isLightTheme
        ? Colors[messageType[type].color].dark3
        : Colors[messageType[type].color].light3

export const MessageWrapper = styled.div<{
    type: MessageType
    solidBackground: boolean
    align?: Align
    width?: string
    maxWidth?: string
    closable?: boolean
    fontSize?: string
    padding?: string
    gap?: string
    isLightTheme: boolean
}>`
    width: ${({ width }) => width ?? '100%'};
    max-width: ${({ maxWidth }) => maxWidth ?? 'none'};
    color: ${({ type, isLightTheme, solidBackground }) => getColor(isLightTheme, type, solidBackground)};
    background: ${({ type, solidBackground }) =>
        Colors[messageType[type].color][solidBackground ? 'main' : 'transparent3']};
    width: ${({ width }) => width ?? '100%'};
    max-width: ${({ maxWidth }) => maxWidth ?? 'none'};
    font-size: ${({ fontSize }) => fontSize ?? '0.8em'};
    padding: ${({ padding }) => padding ?? '10px'};
    border-radius: var(--brLight);
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-weight: 500;
    justify-content: flex-end;
    align-items: ${({ align }) => (align === 'left' ? 'flex-start' : align === 'center' ? 'center' : 'flex-end')};

    .close-button {
        position: absolute;
        top: 0px;
        right: 0px;
    }

    .info-text {
        display: flex;
        flex-direction: column;
        gap: ${({ gap }) => gap ?? 0};
    }

    a {
        text-decoration: underline;
        color: ${({ type, isLightTheme }) => Colors[messageType[type].color][isLightTheme ? 'dark3' : 'light3']};
    }
`
