import UserInfo from '@features/user-info'
import useCurrentDevice from '@shared/lib/hooks/use-current-device'
import Flex from '@shared/ui/flex'
import { CurrentPagePairType } from '@utils/hooks/use-current-exact-page'
import React from 'react'
import { HeaderWrapper } from './ui'
import { HeaderTitle } from './ui/atoms/header-wrapper'
import useHeader from './use-header'

type Props = {
    currentPagePair: CurrentPagePairType
    headerVisible?: boolean
}

const Header: React.FC<Props> = ({ currentPagePair: { currentPage, exactCurrentPage }, headerVisible = false }) => {
    const { isMobile } = useCurrentDevice()
    const isHeaderVisible = headerVisible || !!exactCurrentPage?.planeHeader
    const { headerTitle, backButton } = useHeader({ currentPage, exactCurrentPage, isHeaderVisible })

    if ((exactCurrentPage ?? currentPage)?.withoutHeader) return null

    return (
        <HeaderWrapper headerVisible={isHeaderVisible} hidden={(exactCurrentPage ?? currentPage)?.withoutHeader}>
            <HeaderTitle noButton={exactCurrentPage?.withoutBackButton} headerVisible={isHeaderVisible}>
                {headerTitle}
            </HeaderTitle>
            <Flex jc="space-between" mw="700px">
                {backButton ?? <div />}

                {isMobile && <UserInfo showSearch />}
            </Flex>
        </HeaderWrapper>
    )
}

export default React.memo(Header)
