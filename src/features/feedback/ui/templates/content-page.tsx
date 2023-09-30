import { userModel } from '@entities/user'
import GoBackButton from '@shared/ui/go-back-button'
import React from 'react'
import { HelpLinks, OtherContacts } from '../organisms'
import PageBlock from '@shared/ui/page-block'

export function ContentPage() {
    const {
        data: { user },
    } = userModel.selectors.useUser()
    return (
        <PageBlock>
            {!user && <GoBackButton />}
            <HelpLinks />
            <OtherContacts />
            {/*<AskForm />*/}
        </PageBlock>
    )
}
