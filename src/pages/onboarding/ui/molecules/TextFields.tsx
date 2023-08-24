import React from 'react'
import { topics } from '../../config/paragraph-config'
import TextWrapper from './TextWrapper'

export const TextFields = () => {
    return (
        <>
            {topics.map((topic, index) => (
                <TextWrapper key={topic.title} title={topic.title} collapsed={index !== 0}>
                    {topic.content}
                </TextWrapper>
            ))}
        </>
    )
}
