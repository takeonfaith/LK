import PageBlock from '@shared/ui/page-block'
import React from 'react'
import { LinkList } from './ui/LinkList'
import { TextFields } from './ui/TextFields'
import { CenterPage } from '@shared/ui/atoms'

const Onboarding = () => {
    return (
        <CenterPage padding="10px">
            <PageBlock>
                <TextFields />
                <LinkList />
            </PageBlock>
        </CenterPage>
    )
}

export default Onboarding
