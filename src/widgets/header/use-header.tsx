import { ALL_ROUTE, IRoute } from '@app/routes/general-routes'
import { menuModel } from '@entities/menu'
import useHistoryStack from '@shared/lib/hooks/use-history-stack'
import { Button } from '@shared/ui/button'
import GoBackButton from '@shared/ui/go-back-button'
import { getPageWidth } from '@shared/ui/page-block/lib/get-page-width'
import React from 'react'
import { HiOutlineChevronLeft } from 'react-icons/hi'
import { useHistory } from 'react-router'

type Props = {
    headerVisible: boolean
    currentPage: IRoute | null
}

const useHeader = ({ headerVisible, currentPage }: Props) => {
    const history = useHistory()
    const historyStack = useHistoryStack()

    const isHeaderVisible = headerVisible || !!currentPage?.planeHeader
    const maxWidth = getPageWidth(currentPage)

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
            currentPage
                ? currentPage.isSubPage
                    ? currentPage.subPageHeaderTitle || currentPage.title
                    : currentPage.title
                : 'Не известная страница',
        [currentPage],
    )

    const backButton = React.useMemo(
        () =>
            currentPage?.withoutBackButton ? null : currentPage?.isSubPage ? (
                historyStack.length > 1 ? (
                    <GoBackButton text={isHeaderVisible ? '' : currentPage?.backButtonText} fullWidth={false} />
                ) : currentPage.fallbackPrevPage ? (
                    <Button
                        direction="vertical"
                        icon={<HiOutlineChevronLeft />}
                        onClick={onClickBackButton(currentPage.fallbackPrevPage)}
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
                    textColor="var(--blue)"
                />
            ),
        [currentPage, historyStack, onClickBackButton],
    )

    return { backButton, headerTitle, maxWidth, currentPage, isHeaderVisible }
}

export default useHeader
