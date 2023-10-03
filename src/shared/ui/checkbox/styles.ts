import styled from 'styled-components'

export const CheckboxWrapper = styled.label<{
    invisibleOnFalse: boolean
    checked: boolean
    isActive: boolean
    fontSize?: string
    color?: string
}>`
    transition: 0.1s;
    opacity: ${({ invisibleOnFalse, checked }) => (invisibleOnFalse ? (checked ? 1 : 0) : 1)};
    transform: scale(${({ invisibleOnFalse, checked }) => (invisibleOnFalse ? (checked ? 1 : 0.8) : 1)});
    display: flex;
    align-items: center;
    opacity: ${({ isActive }) => !isActive && 0.7};
    cursor: pointer;

    input[type='checkbox'] {
        display: none;
    }

    .checkbox-text {
        user-select: none;
        white-space: pre-wrap;
        font-size: ${({ fontSize }) => fontSize ?? '1rem'};
        margin-left: 8px;
    }

    &:hover > .checkbox-square {
        box-shadow: 0 0 1px 5px var(--theme-3);
    }
`

export const CheckboxSquare = styled.div`
    min-width: 16px;
    width: 16px;
    height: 16px;
    border: 2px solid var(--grey);
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.1s box-shadow;

    .checkbox:checked + & {
        background: var(--reallyBlue);
        border: 2px solid var(--reallyBlue);
    }

    svg {
        color: #fff;
        width: 13px;
        height: 13px;
    }

    &:focus-visible {
        outline: 4px solid var(--theme-4);
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }
`
