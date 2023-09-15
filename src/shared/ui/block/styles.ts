import { MEDIA_QUERIES } from '@shared/constants'
import { Direction } from '@ui/types'
import styled from 'styled-components'

export interface StyledProps {
    width?: string
    maxWidth?: string
    orientation?: Direction
    background?: string
    gap?: string
    height?: string
    maxHeight?: string
    minHeight?: string
    justifyContent?: string
    alignItems?: string
    padding?: string
    shadow?: boolean
    noAppearanceInMobile?: boolean
    lineHeight?: string
}

const BlockWrapper = styled.div<StyledProps>`
    display: flex;
    align-items: ${({ alignItems }) => alignItems ?? 'center'};
    justify-content: ${({ justifyContent }) => justifyContent ?? 'space-between'};
    background: ${({ background }) => background ?? 'var(--schedule)'};
    line-height: ${({ lineHeight }) => lineHeight};
    border-radius: var(--brLight);
    flex-direction: ${({ orientation }) => (orientation === 'vertical' ? 'column' : 'row')};
    box-shadow: ${({ shadow }) => (shadow ?? true) && 'var(--very-mild-shadow)'};
    padding: ${({ padding }) => padding ?? '20px'};
    height: ${({ height }) => height ?? '330px'};
    max-width: ${({ maxWidth }) => maxWidth ?? '800px'};
    width: ${({ width }) => width ?? '100%'};
    color: var(--text);
    gap: ${({ gap }) => gap ?? '0'};
    max-height: ${({ maxHeight }) => maxHeight};
    min-height: ${({ minHeight }) => minHeight};

    .list {
        width: 100%;
        display: flex;
        height: 100%;
        flex-direction: column;
        overflow-y: auto;
        padding-right: 5px;
    }

    ${MEDIA_QUERIES.isMobile} {
        /* height: auto; */
        /* max-height: 100%; */
        flex-direction: column;
        /* gap: 1rem; */
        box-shadow: ${({ noAppearanceInMobile }) => noAppearanceInMobile && 'none'};
        border-radius: ${({ noAppearanceInMobile }) => noAppearanceInMobile && 'none'};
        padding: ${({ noAppearanceInMobile }) => noAppearanceInMobile && '6px'};
        background: ${({ noAppearanceInMobile }) => noAppearanceInMobile && 'transparent'};
    }
`
export default BlockWrapper
