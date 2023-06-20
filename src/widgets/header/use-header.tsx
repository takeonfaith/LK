import { ALL_ROUTE, IRoute } from '@app/routes/general-routes'
import { menuModel } from '@entities/menu'
import useHistoryStack from '@shared/lib/hooks/use-history-stack'
import { Button } from '@shared/ui/button'
import GoBackButton from '@shared/ui/go-back-button'
import React from 'react'
import { HiOutlineChevronLeft } from 'react-icons/hi'
import { useHistory } from 'react-router'

type Props = {
    currentPage: IRoute
    exactCurrentPage: IRoute | null
    isHeaderVisible: boolean
}

const useHeader = ({ currentPage, exactCurrentPage, isHeaderVisible }: Props) => {
    const history = useHistory()
    const historyStack = useHistoryStack()

    const onClickBackButton = (route = ALL_ROUTE) => {
        return () => {
            menuModel.events.changeOpen({
                isOpen: false,
                currentPage: route.slice(1, route.length),
            })
            history.push(route)
        }
    }

    const headerTitle = React.useMemo(
        () =>
            exactCurrentPage
                ? exactCurrentPage.isSubPage
                    ? exactCurrentPage.subPageHeaderTitle
                    : exactCurrentPage.title
                : currentPage?.title,
        [currentPage, exactCurrentPage],
    )

    const backButton = React.useMemo(
        () =>
            exactCurrentPage?.withoutBackButton ? null : exactCurrentPage?.isSubPage ? (
                historyStack.length > 1 ? (
                    <GoBackButton text={exactCurrentPage?.backButtonText} fullWidth={false} />
                ) : exactCurrentPage.fallbackPrevPage ? (
                    <Button
                        direction="vertical"
                        icon={<HiOutlineChevronLeft />}
                        onClick={onClickBackButton(exactCurrentPage.fallbackPrevPage)}
                        background="transparent"
                    />
                ) : (
                    <Button
                        direction="vertical"
                        icon={<HiOutlineChevronLeft />}
                        onClick={onClickBackButton()}
                        background="transparent"
                    />
                )
            ) : (
                <Button
                    icon={<HiOutlineChevronLeft />}
                    onClick={onClickBackButton()}
                    background="transparent"
                    text={isHeaderVisible ? undefined : 'Все разделы'}
                    padding="0"
                    textColor="var(--reallyBlue)"
                />
            ),
        [exactCurrentPage, historyStack, onClickBackButton],
    )

    return { backButton, headerTitle }
}

export default useHeader
