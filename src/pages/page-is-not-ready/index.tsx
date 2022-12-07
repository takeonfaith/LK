import { OLD_LK_URL } from '@consts'
import { Error, LinkButton } from '@ui/atoms'
import React from 'react'

interface Props {
    oldVersionUrl?: string
    errorText?: string
    buttonText?: string
}

const PageIsNotReady = ({
    oldVersionUrl,
    errorText = 'Страница еще находится в разработке. Если вам она нужна, вернитесь к старому дизайну',
    buttonText = 'Перейти к старому дизайну',
}: Props) => {
    // useEffect(() => {
    //     window.location.href = `/old/?p=${oldVersionUrl?.slice(1, oldVersionUrl.length)}`
    // }, [])
    return (
        <Error text={errorText}>
            <LinkButton
                text={buttonText}
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
