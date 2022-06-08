import { menuModel } from '@entities/menu'
import Select, { SelectPage } from '@features/select'
import { SubmitButton, TextArea, Title } from '@ui/atoms'
import List from '@ui/list'
import Rate from '@ui/rate'
import React, { useState } from 'react'
import styled from 'styled-components'

const RateWrapper = styled.div`
    /* overflow-y: auto; */
    @media (min-width: 1001px) {
        width: 500px;
        /* height: 500px; */
    }
`

const RateApp = () => {
    const [rateInfo, setRateInfo] = useState<Record<string, number | null>>({
        appearance: null,
        comfort: null,
        benefit: null,
    })
    const [comment, setComment] = useState('')
    const [chosenPages, setChosenPages] = useState<SelectPage[] | null>(null)
    const { visibleRoutes } = menuModel.selectors.useMenu()

    if (!visibleRoutes) return null

    return (
        <RateWrapper>
            <Title size={3} align="left" bottomGap>
                Оцените приложение
            </Title>
            <List scroll={false}>
                <Rate
                    title="Красота интерфейса"
                    rate={rateInfo.appearance}
                    setRate={(value: number) =>
                        setRateInfo((prev) => {
                            prev.appearance = value
                            return { ...prev }
                        })
                    }
                />
                <Rate
                    title="Удобство использования"
                    rate={rateInfo.comfort}
                    setRate={(value: number) =>
                        setRateInfo((prev) => {
                            prev.comfort = value
                            return { ...prev }
                        })
                    }
                />
                <Rate
                    title="Польза"
                    rate={rateInfo.benefit}
                    setRate={(value: number) =>
                        setRateInfo((prev) => {
                            prev.benefit = value
                            return { ...prev }
                        })
                    }
                />
                <Select
                    title="Укажите, пожалуйста, какими разделами вы пользуетесь"
                    width="100%"
                    multiple
                    items={Object.values(visibleRoutes)}
                    selected={chosenPages}
                    setSelected={setChosenPages}
                />
                <TextArea placeholder="Комментарий" title="Комментарий" value={comment} setValue={setComment} />
                <SubmitButton
                    isLoading={false}
                    completed={false}
                    text={'Отправить отзыв'}
                    isActive={!Object.values(rateInfo).some((el) => el === null) && !!chosenPages}
                    action={function (): void {
                        throw new Error('Function not implemented.')
                    }}
                    setCompleted={function (completed: boolean): void {
                        throw new Error('Function not implemented.')
                    }}
                    popUpFailureMessage={'Не все поля заполнены'}
                />
            </List>
        </RateWrapper>
    )
}

export default RateApp
