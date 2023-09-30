import { Colors, IColors } from '@shared/constants'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const styledPropsArray = ['isCurrent', 'color']

const LeftsideBarItemWrapper = styled(Link).withConfig({
    shouldForwardProp: (prop) => !styledPropsArray.includes(prop),
})<{
    isCurrent: boolean
    color: keyof IColors
}>`
    position: relative;
    display: flex;
    align-items: center;
    font-weight: 600;
    width: 100%;
    justify-content: flex-start;
    padding: 10px 0;
    margin: 3px 0;
    cursor: pointer;
    position: relative;
    user-select: none;
    text-decoration: none;
    border-radius: var(--brLight);
    color: ${({ color, isCurrent }) => (color && isCurrent ? Colors[color].main : 'var(--text)')};

    & > button {
        opacity: 0;
        position: absolute;
        top: 50%;
        right: -10px;
        transform: translateY(-50%);
    }

    .title {
        opacity: ${({ isCurrent }) => (isCurrent ? 1 : 0.8)};
        width: 100%;
        display: block;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    svg {
        opacity: ${({ isCurrent }) => (isCurrent ? 1 : 0.8)};
        min-width: 22px;
        width: 22px;
        height: 22px;
        margin-right: 12px;
    }

    &:focus {
        outline: 4px solid var(--almostTransparentOpposite);
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }

    &:hover > button {
        opacity: 1;
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
        margin: 0;
        font-weight: ${({ isCurrent }) => (isCurrent ? 800 : 600)};

        & > button {
            display: none;
        }
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
            display: none;
            top: -2px;
            left: 50%;
            transform: translateX(-50%);
        }

        .notification {
            top: 10px;
            right: 0px;
        }

        .title {
            position: absolute;
            left: 50%;
            transform: translate(-50%);
            bottom: -5px;
            font-size: 0.65em;
            width: 100%;
            text-align: center;
        }
    }
`

export default LeftsideBarItemWrapper
