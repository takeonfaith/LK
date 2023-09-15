import { OLD_LK_URL } from '@shared/constants'
import { Error, LinkButton } from '@ui/atoms'
import React, { useEffect } from 'react'

interface Props {
    oldVersionUrl?: string
    errorText?: string
    isRedirectButtonVisible?: boolean
    buttonText?: string
    forceForward?: boolean
}

const PageIsNotReady = ({
    oldVersionUrl,
    errorText = 'Страница еще находится в разработке. Если вам она нужна, вернитесь к старому дизайну',
    buttonText = 'Перейти к старому дизайну',
    forceForward = false,
    isRedirectButtonVisible = true,
}: Props) => {
    useEffect(() => {
        if (forceForward) window.location.href = `/old/?p=${oldVersionUrl?.slice(1, oldVersionUrl.length)}`
    }, [])
    return (
        <Error text={errorText}>
            {isRedirectButtonVisible && (
                <LinkButton
                    text={buttonText}
                    onClick={() => {
                        localStorage.setItem('useOldVersion', 'true')
                    }}
                    background="var(--purple)"
                    width="300px"
                    href={`${OLD_LK_URL}/?p=${oldVersionUrl?.slice(1, oldVersionUrl.length)}`}
                />
            )}
        </Error>
    )
}

export default PageIsNotReady
