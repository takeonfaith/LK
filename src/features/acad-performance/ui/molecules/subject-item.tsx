import { AcadPerformance, IGrade } from '@api/model/acad-performance'
import localizeDate from '@utils/localize-date'
import getShortName from '@utils/get-short-name'
import React from 'react'
import styled from 'styled-components'
import { useModal } from 'widgets'
import { SubjectModal } from '.'
import { SubjectCheker } from '../atoms'
import ProgressBar from '@shared/ui/progress-bar'
import { GradeByScore, WidthByGrade } from '@shared/consts'
import findProgressBarColor from '@features/acad-performance/lib/find-progress-bar-color'

interface Props {
    item: AcadPerformance
    number: number
    type: 'exam' | 'test'
}

const Wrap = styled.div<{ isGraded: boolean }>`
    width: 100%;
    display: flex;
    min-height: 60px;
    align-items: center;
    justify-content: space-between;
    background: var(--theme);
    padding: 15px 0;
    box-sizing: border-box;
    cursor: pointer;
    opacity: ${({ isGraded }) => (isGraded ? 1 : 0.4)};

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
    min-width: 166px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;

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

export const GradeScore = styled.div<{ grade: keyof IGrade }>`
    display: none;

    @media (max-width: 1000px) {
        display: block;
        font-weight: 600;
        color: ${({ grade }) => findProgressBarColor(grade)};
    }
`

const SubjectItem = ({ item, number, type }: Props) => {
    const { open } = useModal()

    const handleOpen = () => item.grade && open(<SubjectModal item={item} />, item.name)

    return (
        <Wrap onClick={handleOpen} isGraded={!!item.grade}>
            <Name>
                <span>{number}</span>
                <div>{item.name}</div>
            </Name>
            <Bar>
                {type === 'exam' ? (
                    <>
                        <ProgressBar value={WidthByGrade[item.grade]} coloring />
                        <GradeScore grade={item.grade}>{GradeByScore[item.grade]}</GradeScore>
                    </>
                ) : (
                    <SubjectCheker grade={item.grade} />
                )}
            </Bar>
            <Grade>{item.grade}</Grade>
            <ExamDate>{localizeDate(item.exam_date)}</ExamDate>
            <Teacher>{getShortName(item.teacher)}</Teacher>
        </Wrap>
    )
}

export default SubjectItem
