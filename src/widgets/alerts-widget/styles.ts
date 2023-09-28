import { Colors } from '@shared/constants'
import Badge from '@shared/ui/badge'
import { Direction } from '@shared/ui/types'
import styled from 'styled-components'

export const AlertItemStyled = styled.div<{ orientation: Direction }>`
    width: 100%;
    border-radius: calc(var(--brLight) - 3px);
    background: var(--block-content);
    box-shadow: var(--block-shadow);
    position: relative;
    display: flex;
    flex-direction: ${({ orientation }) => (orientation === 'vertical' ? 'column' : 'row')};
    height: ${({ orientation }) => (orientation === 'vertical' ? '150px' : '90px')};
    overflow: hidden;
    cursor: pointer;

    &:hover {
        filter: brightness(0.98);
    }
`

export const Image = styled.div<{ orientation: Direction }>`
    height: ${({ orientation }) => (orientation === 'vertical' ? '50px' : '90px')};
    width: ${({ orientation }) => (orientation === 'vertical' ? '50px' : '90px')};
    min-width: ${({ orientation }) => (orientation === 'vertical' ? '50px' : '90px')};
    min-height: ${({ orientation }) => (orientation === 'vertical' ? '50px' : '90px')};
    overflow: hidden;
    background: ${Colors.purple.transparent1};
    border-radius: ${({ orientation }) => (orientation === 'vertical' ? 'calc(var(--brLight) - 3px)' : '0')};
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

export const AlertContent = styled.div`
    min-height: 90px;
    width: 100%;
    padding: 12px;
    display: flex;
    gap: 4px;
    flex-direction: column;
`

export const AlertTitle = styled.div<{ orientation: Direction }>`
    font-weight: 500;
    width: ${({ orientation }) => (orientation === 'vertical' ? '100%' : '85%')};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
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
