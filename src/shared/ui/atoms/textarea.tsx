import React from 'react'
import styled from 'styled-components'

const TextAreaWrapper = styled.div<{ isActive: boolean; textAreaAppearance: boolean; width?: string }>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    width: ${({ width }) => width ?? '100%'};
    min-width: ${({ width }) => width};
    /* pointer-events: ${({ isActive }) => !isActive && 'none'}; */
    opacity: ${({ isActive }) => !isActive && 0.7};

    h5 {
        margin-bottom: 5px;

        .red-star {
            color: var(--red);
            margin-right: 5px;
        }
    }

    .icon {
        position: absolute;
        left: 7px;
        top: 55%;
        transform: translateY(-50%);
        color: var(--text);
        opacity: 0.4;
    }

    textarea {
        border: none;
        color: var(--text);
        outline: none;
        background: ${({ textAreaAppearance }) => (textAreaAppearance ? 'var(--search)' : 'transparent')};
        height: 100%;
        width: 100%;
        padding: 10px;
        font-weight: bold;
        border-radius: 7px;
        padding-left: ${({ textAreaAppearance }) => (textAreaAppearance ? '10px' : '0')};
        padding-right: 35px;
        min-height: 36px;
        height: fit-content;
        max-height: 120px;
        overflow-x: hidden;
        resize: none;

        &::placeholder {
            font-weight: 500;
        }

        &:focus-visible {
            outline: 4px solid var(--almostTransparentOpposite);
        }

        &:focus:not(:focus-visible) {
            outline: none;
        }
    }

    button {
        position: absolute;
        bottom: 5px;
        right: 5px;
        width: 25px;
        height: 25px;
        border-radius: 5px;
        background: var(--search2);
        color: var(--text);
        padding: 0;

        &:active {
            transform: scale(1);
        }

        svg {
            width: 15px;
            height: 15px;
        }
    }
`

interface Props {
    value: string
    setValue: (value: string) => void
    isActive?: boolean
    title?: string
    placeholder?: string
    required?: boolean
    width?: string
    textAreaAppearance?: boolean
}

const TextArea = ({
    value,
    setValue,
    width,
    placeholder,
    required,
    title,
    textAreaAppearance = true,
    isActive = true,
}: Props) => {
    return (
        <TextAreaWrapper isActive={isActive} width={width} textAreaAppearance={textAreaAppearance}>
            {!!title && (
                <h5>
                    {required && <span className="red-star">*</span>}
                    {title}
                </h5>
            )}
            <textarea onChange={(e) => setValue(e.target.value)} placeholder={placeholder} required={required}>
                {value}
            </textarea>
        </TextAreaWrapper>
    )
}

export default TextArea
