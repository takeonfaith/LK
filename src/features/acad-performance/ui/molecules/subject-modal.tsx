import { AcadPerformance } from '@api/model/acad-performance'
import { Title } from '@ui/atoms'
import KeyValue from '@ui/atoms/key-value'
import findSemestr from '@utils/find-semestr'
import localizeDate from '@utils/localize-date'
import React from 'react'
import styled from 'styled-components'
import { User } from 'widgets'

const Container = styled.div`
    width: 600px;

    @media (max-width: 800px) {
        width: 100%;
        padding: 10px;
    }
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
            <KeyValue keyStr="Курс" value={item.course} />
            <KeyValue keyStr="Форма аттестации" value={item.exam_type} />
            <KeyValue keyStr="Дата проведения" value={localizeDate(item.exam_date)} />
            <KeyValue keyStr="Оценка" value={item.grade} />
            <KeyValue keyStr="Номер ведомости" value={item.bill_num} />
            <KeyValue keyStr="Семестр" value={findSemestr(item.exam_date, +item.course)} />
            <KeyValue keyStr="Кафедра" value={item.chair} />
            <KeyValue keyStr="Преподаватель" value={<User type="teacher" name={item.teacher} />} direction="vertical" />
        </Container>
    )
}

export default SubjectModal
