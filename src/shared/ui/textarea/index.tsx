import React from 'react'
import { TextAreaWrapper } from './styles'

export type TextAreaProps = {
    value: string
    setValue: (value: string) => void
    isActive?: boolean
    title?: string
    placeholder?: string
    required?: boolean
    width?: string
    textAreaAppearance?: boolean
}

export function TextArea(props: TextAreaProps) {
    const { value, setValue, width, placeholder, required, title, textAreaAppearance = true, isActive = true } = props
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
