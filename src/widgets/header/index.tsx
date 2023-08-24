import UserInfo from '@features/user-info'
import useCurrentDevice from '@shared/lib/hooks/use-current-device'
import Flex from '@shared/ui/flex'
import React from 'react'
import { HeaderWrapper } from './ui'
import { HeaderTitle } from './ui/atoms/header-wrapper'
import useHeader from './use-header'
import { IRoute } from '@app/routes/general-routes'

type Props = {
    currentPage: IRoute | null
    headerVisible?: boolean
}

const Header: React.FC<Props> = ({ currentPage, headerVisible = false }) => {
    const { isMobile } = useCurrentDevice()

    const { headerTitle, backButton, isHeaderVisible, maxWidth } = useHeader({
        currentPage,
        headerVisible,
    })

    if (currentPage?.withoutHeader) return null

    return (
        <HeaderWrapper headerVisible={isHeaderVisible} hidden={(currentPage ?? currentPage)?.withoutHeader}>
            <HeaderTitle maxWidth={maxWidth} noButton={currentPage?.withoutBackButton} headerVisible={isHeaderVisible}>
                {headerTitle}
            </HeaderTitle>
            <Flex jc="space-between" mw={maxWidth}>
                {backButton ?? <div />}

                {isMobile && <UserInfo showSearch />}
            </Flex>
        </HeaderWrapper>
    )
}

export default React.memo(Header)
