import { ContentPage } from '@features/feedback/ui'
import { Wrapper } from '@ui/atoms'
import React from 'react'

const FeedbackPage = () => {
    return (
        <Wrapper data={[]} load={() => {}} error={null} loading={false}>
            <ContentPage />
        </Wrapper>
    )
}

export default FeedbackPage
