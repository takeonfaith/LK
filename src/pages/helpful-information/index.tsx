import { userModel } from '@entities/user'
import { CenterPage } from '@ui/atoms'
import Block from '@ui/block'
import React, { useCallback, useMemo } from 'react'
import { SliderPage } from 'widgets'
import pages from './config/pages-config'
import getPages from './lib/get-pages'
import { useHistory, useRouteMatch } from 'react-router'
import { TEMPLATE_USEFUL_INFO_ROUTE, USEFUL_INFO_ROUTE } from '@app/routes/general-routes'
import { menuModel } from '@entities/menu'

const HelpfulInformation = () => {
    const { allRoutes } = menuModel.selectors.useMenu()
    const { replace } = useHistory()
    const params = useRouteMatch(TEMPLATE_USEFUL_INFO_ROUTE)?.params as { infoType: string | undefined }
    const { data: userData } = userModel.selectors.useUser()
    const isStaff = useMemo(() => userData?.user?.user_status === 'staff', [userData])

    const sliderPages = useMemo(() => getPages(Object.values(pages), isStaff), [pages, isStaff])

    const sliderPageOnMount = useMemo(
        () => (params?.infoType ? sliderPages.findIndex(({ id }) => id === params.infoType) ?? 0 : 0),
        // Without dependencies to save value on mounting moment
        [],
    )

    const onChangeSliderPage = useCallback(
        (pageId: Nullable<string>) => {
            pageId && replace(`${allRoutes?.['helpful-information']?.path ?? USEFUL_INFO_ROUTE}/${pageId}`)
        },
        [allRoutes],
    )

    return (
        <CenterPage alignItems="flex-start" padding="10px">
            <Block orientation="vertical" gap="10px" maxWidth="750px" height="fit-content" noAppearanceInMobile>
                <SliderPage pages={sliderPages} currentPage={sliderPageOnMount} onChangePage={onChangeSliderPage} />
            </Block>
        </CenterPage>
    )
}

export default HelpfulInformation
