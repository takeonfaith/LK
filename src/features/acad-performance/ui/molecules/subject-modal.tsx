import { AcadPerformance } from '@entities/acad-performance/model'
import { Title } from '@ui/atoms'
import findSemestr from '@utils/find-semestr'
import localizeDate from '@utils/localize-date'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 600px;

    @media (max-width: 800px) {
        width: 100%;
    }
`
const Line = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;

    margin-top: 10px;
`

const Data = styled.span`
    margin-left: 5px;
`

interface Props {
    item: AcadPerformance
}

const SubjectModal = ({ item }: Props) => {
    return (
        <Container>
            <Title size={2} align="left">
                {item.name}
            </Title>
            <Line>
                <b>Курс:</b>
                <Data>{item.course}</Data>
            </Line>
            <Line>
                <b>Форма аттестации:</b>
                <Data> {item.exam_type}</Data>
            </Line>
            <Line>
                <b>Дата проведения:</b>
                <Data> {localizeDate(item.exam_date)}</Data>
            </Line>
            <Line>
                <b>Оценка:</b>
                <Data> {item.grade}</Data>
            </Line>
            <Line>
                <b>Преподаватель:</b>
                <Data> {item.teacher}</Data>
            </Line>
            <Line>
                <b>Номер ведомости:</b>
                <Data> {item.bill_num}</Data>
            </Line>
            <Line>
                <b>Семестр:</b>
                <Data> {findSemestr(item.exam_date, +item.course)}</Data>
            </Line>
            <Line>
                <b>Кафедра:</b>
                <Data> {item.chair}</Data>
            </Line>
        </Container>
    )
}

export default SubjectModal
