import { userModel } from '@entities/user'
import GoBackButton from '@shared/ui/go-back-button'
import { CenterPage, Title } from '@ui/atoms'
import Block from '@ui/block'
import React from 'react'
import { HelpLinks, OtherContacts } from '../organisms'

export function ContentPage() {
    const {
        data: { user },
    } = userModel.selectors.useUser()
    return (
        <CenterPage alignItems="flex-start">
            <Block
                orientation="vertical"
                height="fit-content"
                lineHeight="25px"
                maxWidth="700px"
                gap="10px"
                noAppearanceInMobile
            >
                {!user && <GoBackButton />}
                <Title size={2} align="left" bottomGap>
                    Обратная связь
                </Title>
                <HelpLinks />
                <OtherContacts />
                {/*<AskForm />*/}
            </Block>
        </CenterPage>
    )
}
