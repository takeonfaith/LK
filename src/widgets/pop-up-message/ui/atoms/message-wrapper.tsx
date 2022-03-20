import { Colors } from '@consts'
import styled from 'styled-components'

const PopUpMessageWrapper = styled.div<{
    isOpen: boolean
    color: string
    isClickable: boolean
    position: number
    height: number
}>`
    width: 100%;
    border-radius: var(--brLight);
    background: ${({ color }) => Colors[color].dark};
    z-index: 100;
    transition: 0.4s;
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
    padding: ${({ isOpen }) => (isOpen ? '10px' : '0px 10px')};
    padding-right: ${({ isOpen }) => (isOpen ? '30px' : '0px')};
    text-align: left;
    color: ${({ color }) => Colors[color].main};
    font-weight: 600;
    position: relative;
    cursor: ${({ isClickable }) => (isClickable ? 'pointer' : 'normal')};
    height: ${({ isOpen, height }) => (isOpen ? height + 'px' : '0')};
    margin: ${({ isOpen }) => (isOpen ? '5px 0' : '0px')};
    animation: ${({ isOpen }) => (isOpen ? 'fadeIn 0.4s forwards' : 'fadeOut 0.4s forwards')};

    @keyframes fadeIn {
        0% {
            opacity: 0;
            transform: translateY(100%);
        }
        100% {
            opacity: 1;
            transform: translateY(0%);
        }
    }

    @keyframes fadeOut {
        0% {
            opacity: 1;
            transform: translateY(0%);
        }
        100% {
            opacity: 0;
            transform: translateY(100%);
        }
    }

    a {
        color: #fff;
    }

    button {
        position: absolute;
        top: 4px;
        right: 4px;
        background: transparent;
        width: 28px;
        height: 28px;
        border-radius: 6px;
        padding: 5px;
        color: #fff;

        &:hover {
            background: #ffffff5c;
        }
    }

    @media (max-width: 1000px) {
        top: 20px;
        bottom: auto;
        left: 50%;
        transform: translate(${({ isOpen }) => (isOpen ? '-50%, 0px' : '-50%, -20px')});
        font-size: 0.8em;
    }
`

export default PopUpMessageWrapper
