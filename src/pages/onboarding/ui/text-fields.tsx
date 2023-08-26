import React from 'react'
import TextWrapper from './text-wrapper'
import { topics } from '../config/paragraph-config'

export const TextFields = () => {
    return (
        <>
            {topics.map(({ title, content: Content }, index) => (
                <TextWrapper key={title} title={title} collapsed={index !== 0}>
                    <Content />
                </TextWrapper>
            ))}
        </>
    )
}
