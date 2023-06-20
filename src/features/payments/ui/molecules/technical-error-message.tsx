import { Message } from '@shared/ui/message'
import React from 'react'

const TechicalErrorMessage = () => {
    return (
        <Message type="tip" lineHeight="1.7rem" maxWidth="700px" fontSize="0.83rem">
            <p>
                По возникновении технических проблем при подписании договоров и дополнительных соглашений обращайтесь на
                почту <a href="mailto:info@mospolytech.ru">info@mospolytech.ru</a>
            </p>
        </Message>
    )
}

export default TechicalErrorMessage
