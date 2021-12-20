import { Button, Error } from '@ui/atoms'
import React from 'react'
import styled from 'styled-components'

const PageIsNotReadyWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const PageIsNotReady = () => {
    return (
        <Error text={'Страница еще находится в разработке. Если вам она нужна, вернитесь к старому'}>
            <Button
                text={<a href="http://test-e.mospolytech.ru/old/">Перейти к старому дизану</a>}
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
