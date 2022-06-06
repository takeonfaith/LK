import { Colors, IColors } from '@consts'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LeftsideBarItemWrapper = styled(Link)<{
    isCurrent: boolean
    color: keyof IColors
}>`
    position: relative;
    display: flex;
    align-items: center;
    font-weight: ${({ isCurrent }) => (isCurrent ? 800 : 600)};
    width: 100%;
    justify-content: flex-start;
    padding: 10px 0;
    margin: 5px 0;
    cursor: pointer;
    position: relative;
    user-select: none;
    text-decoration: none;
    border-radius: var(--brLight);
    color: ${({ color, isCurrent }) => (color && isCurrent ? Colors[color].main : 'var(--text)')};

    .title {
        opacity: ${({ isCurrent }) => (isCurrent ? 1 : 0.8)};
        width: 130px;
        display: block;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    svg {
        opacity: ${({ isCurrent }) => (isCurrent ? 1 : 0.8)};
        width: 22px;
        height: 22px;
        margin-right: 7px;
    }

    &:focus {
        outline: 4px solid var(--almostTransparentOpposite);
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }

    &::before {
        content: '';
        width: 8px;
        height: 8px;
        display: block;
        position: absolute;
        top: 50%;
        left: -15px;
        transform: translateY(-50%);
        background: ${({ color }) => (color ? Colors[color].main : 'var(--reallyBlue)')};
        border-radius: 10px;
        transition: 0.2s opacity;
        opacity: ${({ isCurrent }) => (isCurrent ? 1 : 0)};
    }

    @media (max-width: 1000px) {
        /* span {
            width: 100%;
            display: block;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        } */
        justify-content: center;

        svg {
            margin-right: 0px;
        }

        &::before {
            top: auto;
            bottom: 0px;
            left: 50%;
            transform: translateX(-50%);
        }

        .notification {
            top: 10px;
            right: 0px;
        }

        .title {
            display: none;
        }
    }
`

export default LeftsideBarItemWrapper
