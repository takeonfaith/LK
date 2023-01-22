import React from 'react'
import { useHistory } from 'react-router'
import { FaChevronLeft } from 'react-icons/fa'
import useHistoryStack from '@utils/hooks/use-history-stack'
import { Button } from '@ui/button'
import { menuModel } from '@entities/menu'
import useResize from '@utils/hooks/use-resize'
import { HeaderWrapper, UserInfo } from './ui'
import { ALL_ROUTE } from '@app/routes/general-routes'
import GoBackButton from '@ui/go-back-button'
import { CurrentPagePairType } from '@utils/hooks/use-current-exact-page'

type Props = {
    currentPagePair: CurrentPagePairType
}

const Header: React.FC<Props> = ({ currentPagePair: { currentPage, exactCurrentPage } }) => {
    const history = useHistory()
    const historyStack = useHistoryStack()
    const { width } = useResize()

    const onClickBackButton =
        (route = ALL_ROUTE) =>
        () => {
            menuModel.events.changeOpen({
                isOpen: false,
                currentPage: route.slice(1, route.length),
            })
            history.push(route)
        }

    const headerTitle = React.useMemo(
        () =>
            exactCurrentPage
                ? exactCurrentPage.isSubPage
                    ? exactCurrentPage.subPageHeaderTitle
                    : exactCurrentPage.title
                : currentPage.title,
        [currentPage, exactCurrentPage],
    )

    const backButton = React.useMemo(
        () =>
            exactCurrentPage?.withoutBackButton ? null : exactCurrentPage?.isSubPage ? (
                historyStack.length > 1 ? (
                    <GoBackButton text={exactCurrentPage?.backButtonText} fullWidth={false} />
                ) : exactCurrentPage.fallbackPrevPage ? (
                    <Button
                        icon={<FaChevronLeft />}
                        onClick={onClickBackButton(exactCurrentPage.fallbackPrevPage)}
                        background="transparent"
                    />
                ) : (
                    <Button icon={<FaChevronLeft />} onClick={onClickBackButton()} background="transparent" />
                )
            ) : (
                <Button icon={<FaChevronLeft />} onClick={onClickBackButton()} background="transparent" />
            ),
        [exactCurrentPage],
    )

    return (
        <HeaderWrapper hidden={(exactCurrentPage ?? currentPage).withoutHeader}>
            <div className="header-button-and-title">
                {backButton}

                <div className="title-container">
                    <h3>{headerTitle}</h3>
                </div>
            </div>
            {width <= 1000 && <UserInfo />}
        </HeaderWrapper>
    )
}

export default React.memo(Header)
