import { userModel } from '@entities/user'
import { CenterPage, Title } from '@ui/atoms'
import Block from '@ui/block'
import React, { useMemo } from 'react'
import { SliderPage } from 'widgets'
import pages from './config/pages-config'
import getPages from './lib/get-pages'

const HelpfulInformation = () => {
    const { data: userData } = userModel.selectors.useUser()
    const isStaff = useMemo(() => userData?.user?.user_status === 'staff', [userData])

    return (
        <CenterPage alignItems="flex-start" padding="10px">
            <Block orientation="vertical" gap="10px" maxWidth="750px" height="fit-content">
                <Title size={2} align="left">
                    Полезная информация
                </Title>
                <SliderPage pages={getPages(pages, isStaff)} currentPage={0} />
            </Block>
        </CenterPage>
    )
}

export default HelpfulInformation
