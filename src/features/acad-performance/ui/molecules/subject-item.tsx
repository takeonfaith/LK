import { AcadPerformance } from '@api/model/acad-performance'
import findProgressBarColor from '@features/acad-performance/lib/find-progress-bar-color'
import { getSubjectIcon } from '@features/acad-performance/lib/get-subject-icon'
import { Icon } from '@features/all-pages'
import { GradeByScore } from '@shared/consts'
import DotSeparatedWords from '@shared/ui/dot-separated-words'
import Flex from '@shared/ui/flex'
import Subtext from '@shared/ui/subtext'
import getShortName from '@utils/get-short-name'
import localizeDate from '@shared/lib/dates/localize-date'
import React from 'react'
import styled from 'styled-components'
import { useModal } from 'widgets'
import { SubjectModal } from '.'
import { SubjectCheker } from '../atoms'

interface Props {
    item: AcadPerformance
    number: number
    type: string
}

const Wrap = styled.div<{ isGraded: boolean }>`
    width: 100%;
    display: flex;
    min-height: 60px;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;
    box-sizing: border-box;
    cursor: pointer;
    opacity: ${({ isGraded }) => (isGraded ? 1 : 0.4)};
`

const Name = styled.div`
    display: flex;
    margin-right: 10px;
    font-weight: 500;
    hyphens: auto;

    @media (max-width: 1000px) {
        min-width: 0px;
    }
`

// export const GradeScore = styled.div<{ grade: keyof IGrade }>`
//     display: none;

//     @media (max-width: 1000px) {
//         display: block;
//         font-weight: 600;
//         color: ${({ grade }) => findProgressBarColor(grade)};
//     }
// `

const Grade = styled.strong<{ color: string }>`
    color: ${({ color }) => color};
    font-weight: 600;
    width: 30px;
    display: flex;
    justify-content: flex-end;
`

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SubjectItem = ({ item, number, type }: Props) => {
    const { open } = useModal()
    const { name, grade } = item

    // const grade = 'Удовлетворительно'

    const handleOpen = () => item.grade && open(<SubjectModal item={item} />, item.name)

    return (
        <Wrap onClick={handleOpen} isGraded={!!item.grade}>
            <Flex gap="16px">
                <Icon color={findProgressBarColor(grade)} borderRadius="9px">
                    {getSubjectIcon(name)}
                </Icon>
                <Flex d="column" ai="flex-start" gap="4px">
                    <Name>{name}</Name>
                    <Subtext>
                        <DotSeparatedWords words={[getShortName(item.teacher), localizeDate(item.exam_date)]} />
                    </Subtext>
                </Flex>
            </Flex>
            <Grade color={findProgressBarColor(grade)}>
                {type === 'Зачет' ? <SubjectCheker grade={grade} /> : grade && GradeByScore[grade]}
            </Grade>
        </Wrap>
    )
}

export default SubjectItem
