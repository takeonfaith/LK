import { OLD_LK_URL } from '@shared/constants'
import { Button, Error } from '@ui/atoms'
import React, { useEffect } from 'react'
import { FiArrowLeftCircle } from 'react-icons/fi'

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
                <a href={`${OLD_LK_URL}/?p=${oldVersionUrl?.slice(1, oldVersionUrl.length)}`}>
                    <Button
                        text={buttonText}
                        icon={<FiArrowLeftCircle />}
                        width="100%"
                        background="var(--reallyBlue)"
                        textColor="#fff"
                        align="left"
                        padding="10px"
                    />
                </a>
            )}
        </Error>
    )
}

export default PageIsNotReady
