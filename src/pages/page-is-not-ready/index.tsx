import { OLD_LK_URL } from '@shared/constants/consts'
import { Error, LinkButton } from '@ui/atoms'
import React, { useEffect } from 'react'
import styled from 'styled-components'

interface Props {
    oldVersionUrl?: string
    errorText?: string
    buttonText?: string
    forceForward?: boolean
}

const PageIsNotReady = ({
    oldVersionUrl,
    errorText = 'Страница еще находится в разработке. Если вам она нужна, вернитесь к старому дизайну',
    buttonText = 'Перейти к старому дизайну',
    forceForward = false,
}: Props) => {
    useEffect(() => {
        if (forceForward) window.location.href = `/old/?p=${oldVersionUrl?.slice(1, oldVersionUrl.length)}`
    }, [])
    return (
        <Error text={errorText}>
            <StyledLinkButton
                text={buttonText}
                onClick={() => {
                    localStorage.setItem('useOldVersion', 'true')
                }}
                href={`${OLD_LK_URL}/?p=${oldVersionUrl?.slice(1, oldVersionUrl.length)}`}
            />
        </Error>
    )
}

const StyledLinkButton = styled(LinkButton)`
    background-color: var(--purple);
    width: 300px;
`

export default PageIsNotReady
