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
            <a href={`https://e.mospolytech.ru/old/?p=${oldVersionUrl}`}>
                <Button
                    text={'Перейти к старому дизайну'}
                    onClick={() => {
                        localStorage.setItem('useOldVersion', 'true')
                    }}
                    background="var(--purple)"
                    width="300px"
                />
            </a>
        </Error>
    )
}

export default PageIsNotReady
