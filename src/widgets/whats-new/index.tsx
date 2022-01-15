import { Button, Title } from '@ui/atoms'
import { DotPages } from '@ui/molecules'
import limitNumber from '@utils/limit-number'
import React, { useState } from 'react'
import styled from 'styled-components'

const WhatsNewWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 1001px) {
        width: 600px;
        height: 600px;
    }

    .content {
        height: 100%;
    }

    .buttons {
        display: flex;
        align-items: center;
        width: 100%;
        margin-top: 10px;

        & > * + * {
            margin-left: 10px;
        }
    }
`

const WhatsNew = () => {
    const [currentPage, setCurrentPage] = useState(0)

    return (
        <WhatsNewWrapper>
            <Title size={2}>Что нового</Title>
            <div className="content"></div>
            <DotPages amount={4} current={currentPage} />
            <div className="buttons">
                <Button onClick={() => setCurrentPage((prev) => limitNumber(prev - 1, 3))} text="Назад" width="100%" />
                {currentPage === 3 ? (
                    <Button onClick={() => null} text="Готово" width="100%" />
                ) : (
                    <Button
                        onClick={() => setCurrentPage((prev) => limitNumber(prev + 1, 3))}
                        text="Далее"
                        width="100%"
                    />
                )}
            </div>
        </WhatsNewWrapper>
    )
}

export default WhatsNew
