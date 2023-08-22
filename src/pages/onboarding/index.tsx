import PageBlock from '@shared/ui/page-block'
import React from 'react'
import { LinkList } from './ui/LinkList'
import { TextFields } from './ui/TextFields'

const Onboarding = () => {
    return (
        <PageBlock>
            <TextFields />
            <LinkList />
        </PageBlock>
    )
}

export default Onboarding
