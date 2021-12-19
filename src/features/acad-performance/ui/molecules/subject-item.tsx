import { AcadPerformance } from '@entities/acad-performance/model'
import prepareTeacherName from '@features/acad-performance/lib/prepare-teacher-name'
import localizeDate from '@utils/localize-date'
import React from 'react'
import styled from 'styled-components'
import { useModal } from 'widgets/modal'
import { SubjectModal } from '.'
import { SubjectProgresssBar, SubjectCheker } from '../atoms'

interface Props {
    item: AcadPerformance
    number: number
    type: 'exam' | 'test'
}

const Wrap = styled.div`
    width: 100%;
    display: flex;
    min-height: 60px;
    align-items: center;
    justify-content: space-between;
    background: var(--theme);
    padding: 15px 0;
    box-sizing: border-box;
    cursor: pointer;

    &:not(:last-child) {
        border-bottom: 1px solid var(--almostTransparentOpposite);
    }

    &:hover {
        filter: brightness(0.95);
    }
`

const Name = styled.div`
    width: 340px;
    min-width: 240px;
    height: 100%;
    display: flex;
    margin-right: 10px;

    div {
        font-weight: 600;
        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;

        margin-left: 5px;
    }

    @media (max-width: 1000px) {
        min-width: 0px;
    }
`

const Bar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
    min-width: 330px;

    @media (max-width: 1400px) {
        min-width: 200px;
    }

    @media (max-width: 1200px) {
        display: none;
    }

    @media (max-width: 1000px) {
        min-width: 0px;
        display: flex;
        justify-content: flex-end;
        margin-right: 5px;
    }
`

const Grade = styled.div`
    min-width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    @media (max-width: 1000px) {
        display: none;
    }
`

const ExamDate = styled.div`
    min-width: 150px;
    width: 150px;

    @media (max-width: 1000px) {
        display: none;
    }
`

const Teacher = styled.div`
    min-width: 150px;
    width: 150px;

    @media (max-width: 1200px) {
        display: none;
    }

    @media (max-width: 1000px) {
        display: none;
    }
`

const SubjectItem = ({ item, number, type }: Props) => {
    const { toggle } = useModal(<SubjectModal item={item} />)
    return (
        item.grade && (
            <Wrap onClick={toggle}>
                <Name>
                    <span>{number}</span>
                    <div>{item.name}</div>
                </Name>
                <Bar>
                    {type === 'exam' ? (
                        <SubjectProgresssBar grade={item.grade} />
                    ) : (
                        <SubjectCheker grade={item.grade} />
                    )}
                </Bar>
                <Grade>{item.grade}</Grade>
                <ExamDate>{localizeDate(item.exam_date)}</ExamDate>
                <Teacher>{prepareTeacherName(item.teacher)}</Teacher>
            </Wrap>
        )
    )
}

export default SubjectItem
