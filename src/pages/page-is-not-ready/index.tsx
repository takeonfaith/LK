import { OLD_LK_URL } from '@consts'
import { Error, LinkButton } from '@ui/atoms'
import React from 'react'

interface Props {
    oldVersionUrl?: string
}

const PageIsNotReady = ({ oldVersionUrl }: Props) => {
    // useEffect(() => {
    //     window.location.href = `/old/?p=${oldVersionUrl?.slice(1, oldVersionUrl.length)}`
    // }, [])
    return (
        <Error text={'Страница еще находится в разработке. Если вам она нужна, вернитесь к старому дизайну'}>
            <LinkButton
                text={'Перейти к старому дизайну'}
                onClick={() => {
                    localStorage.setItem('useOldVersion', 'true')
                }}
                background="var(--purple)"
                width="300px"
                href={`${OLD_LK_URL}/?p=${oldVersionUrl?.slice(1, oldVersionUrl.length)}`}
            />
        </Error>
    )
}

export default PageIsNotReady
