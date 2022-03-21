import { adminLinksModel } from '@entities/admin-links'
import isAccessibleRoute from '@utils/is-accessible-route'
import { useCallback } from 'react'

const useIsAccessibleRoute = () => {
    const { data: links } = adminLinksModel.selectors.useAdminLinks()
    const isAccessible = useCallback(
        (title: string) => {
            return isAccessibleRoute(title, links)
        },
        [links],
    )

    return isAccessible
}

export default useIsAccessibleRoute
