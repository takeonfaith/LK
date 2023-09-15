import PageBlock from '@shared/ui/page-block'
import React from 'react'
import { LinkList } from './ui/link-list'
import { CenterPage } from '@shared/ui/atoms'
import { TextFields } from './ui/text-fields'

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
