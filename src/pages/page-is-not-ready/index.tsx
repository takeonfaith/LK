import { Button, Error } from '@ui/atoms'
import React, { useEffect } from 'react'

interface Props {
    oldVersionUrl?: string
}

const PageIsNotReady = ({ oldVersionUrl }: Props) => {
    useEffect(() => {
        window.location.href = `/old/?p=${oldVersionUrl?.slice(1, oldVersionUrl.length)}`
    }, [])

    return (
        <Error text={'Страница еще находится в разработке. Если вам она нужна, вернитесь к старому'}>
            <Button
                text={<a href={`/old/?p=${oldVersionUrl}`}>Перейти к старому дизану</a>}
                onClick={() => {
                    localStorage.setItem('useOldVersion', 'true')
                }}
                background="var(--purple)"
                width="300px"
            />
        </Error>
    )
}

export default PageIsNotReady
