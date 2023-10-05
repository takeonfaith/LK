import { Colors } from '@shared/constants'
import Badge from '@shared/ui/badge'
import { Direction } from '@shared/ui/types'
import styled from 'styled-components'

export const AlertItemStyled = styled.div<{ orientation: Direction }>`
    width: 100%;
    border-radius: ${({ orientation }) => (orientation === 'vertical' ? 'calc(var(--brLight) - 3px)' : '8px')};
    background: ${({ orientation }) => (orientation === 'vertical' ? 'var(--block-content)' : 'var(--block-content)')};
    box-shadow: ${({ orientation }) => (orientation === 'vertical' ? 'var(--block-shadow)' : '0 0 1px #707070')};
    position: relative;
    display: flex;
    flex-direction: ${({ orientation }) => (orientation === 'vertical' ? 'column' : 'row-reverse')};
    align-items: ${({ orientation }) => (orientation === 'vertical' ? 'flex-start' : 'stretch')};
    height: ${({ orientation }) => (orientation === 'vertical' ? '150px' : 'fit-content')};
    overflow: hidden;
    padding: ${({ orientation }) => (orientation === 'vertical' ? '0' : '12px')};
    cursor: pointer;

    &:hover {
        filter: brightness(0.98);
    }
`

export const Image = styled.div<{ orientation: Direction }>`
    height: ${({ orientation }) => (orientation === 'vertical' ? '50px' : 'auto')};
    width: ${({ orientation }) => (orientation === 'vertical' ? '50px' : '65px')};
    min-width: ${({ orientation }) => (orientation === 'vertical' ? '50px' : '65px')};
    min-height: ${({ orientation }) => (orientation === 'vertical' ? '50px' : '65px')};
    overflow: hidden;
    background: ${Colors.purple.transparent2};
    border-radius: ${({ orientation }) => (orientation === 'vertical' ? 'calc(var(--brLight) - 3px)' : '7px')};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: ${({ orientation }) => (orientation === 'vertical' ? '12px' : '0')};
    margin-top: ${({ orientation }) => (orientation === 'vertical' ? '12px' : '0')};
    box-shadow: ${({ orientation }) => (orientation === 'vertical' ? '0 0 30px rgba(0, 0, 0, 0.101)' : 'none')};

    svg {
        width: 40%;
        height: 40%;
    }

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`

export const AlertContent = styled.div<{ orientation: Direction }>`
    min-height: 60px;
    width: 100%;
    padding: ${({ orientation }) => (orientation === 'vertical' ? '12px' : '0')};
    display: flex;
    gap: 4px;
    flex-direction: column;
    justify-content: space-between;
`

export const AlertTitle = styled.div<{ orientation: Direction }>`
    font-weight: 500;
    width: ${({ orientation }) => (orientation === 'vertical' ? '100%' : '85%')};
    hyphens: auto;
`

export const AlertText = styled.div`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 0.86rem;
    margin-bottom: 6px;
    height: 20px;
    opacity: 0.8;

    p {
        text-align: left;
    }

    strong {
        font-weight: 400;
    }

    img {
        display: none;
    }
`

export const AlertItemBadge = styled(Badge)`
    position: absolute;
    top: 6px;
    right: -4px;
`
