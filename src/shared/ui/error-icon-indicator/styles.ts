import styled from 'styled-components'
import { UIProps } from './types'
import { Colors } from '@shared/constants'

export const ErrorIconIndicatorStyled = styled.div<UIProps>`
    position: ${({ topRightConrer }) => (topRightConrer ? 'absolute' : 'relative')};
    top: ${({ topRightConrer }) => (topRightConrer ? '18px' : '0')};
    right: ${({ topRightConrer }) => (topRightConrer ? '18px' : '0')};
    width: 36px;
    height: 36px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${Colors.red.main};
    transition: 0.1s background;
    cursor: pointer;

    svg {
        width: 18px;
        height: 18px;
    }

    &:hover {
        background: ${Colors.red.transparent3};
    }
`
