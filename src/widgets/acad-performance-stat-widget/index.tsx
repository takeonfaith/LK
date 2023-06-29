import { acadPerformanceModel } from '@entities/acad-performance'
import { AcadPerformance } from '@shared/api/model/acad-performance'
import React from 'react'
import styled from 'styled-components'
import { Title } from '@shared/ui/title'
import PieChart from '@shared/ui/pie-chart'
import { Divider } from '@shared/ui/divider'
import DotSeparatedWords from '@shared/ui/dot-separated-words'
import Subtext from '@shared/ui/subtext'
import { userModel } from '@entities/user'
import findSemestr from '@shared/lib/find-semestr'

const AcadPerformanceStatWidgetStyled = styled.div`
    width: 100%;
`

const Content = styled.div`
    width: 100%;
    height: 100%;
    background: var(--schedule);
    border-radius: 11px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 140px;

    @media (max-width: 1000px) {
        overflow-x: auto;
        justify-content: flex-start;
        gap: 12px;
    }
`

const analyzeExams = (loading: boolean, exams: AcadPerformance[] | undefined, tests: AcadPerformance[] | undefined) => {
    const defaultExams = { passed: 0, notPassed: 0, five: 0, four: 0, three: 0, two: 0, notCame: 0 }
    if (!exams || !tests) return { result: defaultExams, status: loading ? 'success' : 'failed' }

    const examsResult = [...exams, ...tests]?.reduce((acc, exam) => {
        const { grade } = exam
        if (grade === 'Отлично') acc.five++
        else if (grade === 'Зачтено') acc.passed++
        else if (grade === 'Не зачтено') acc.notPassed++
        else if (grade === 'Хорошо') acc.four++
        else if (grade === 'Удовлетворительно') acc.three++
        else if (grade === 'Неудовлетворительно') acc.two++
        else acc.notCame++
        return acc
    }, defaultExams)

    return { result: examsResult, status: 'success' }
}

const AcadPerformanceStatWidget = () => {
    const { data, loading } = acadPerformanceModel.selectors.useData()
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const semestr = `${findSemestr(new Date().toString(), user?.course ?? 1)}`

    const { result, status } = analyzeExams(loading, data?.exam, data?.test)
    const examsLen = data?.exam?.length ?? 1
    const testsLen = data?.test?.length ?? 1
    const words = [`Экзаменов: ${examsLen}`, `Зачетов: ${testsLen}`]

    return (
        <AcadPerformanceStatWidgetStyled>
            <Title size={4} align="left" width="100%">
                Оценки за {semestr} семестр
                <Subtext>
                    <DotSeparatedWords words={words} />
                </Subtext>
            </Title>
            {status !== 'failed' && (
                <Content>
                    <PieChart loading={loading} percent={result.passed / testsLen} size="small">
                        Зач
                    </PieChart>
                    <Divider direction="vertical" margin="0" width="50px" />
                    <PieChart loading={loading} percent={result.five / examsLen} size="small">
                        5
                    </PieChart>
                    <PieChart loading={loading} percent={result.four / examsLen} size="small">
                        4
                    </PieChart>
                    <PieChart loading={loading} percent={result.three / examsLen} size="small">
                        3
                    </PieChart>
                    <PieChart loading={loading} percent={result.two / examsLen} size="small">
                        2
                    </PieChart>
                    <Divider direction="vertical" margin="0" width="50px" />
                    <PieChart loading={loading} percent={result.notCame / examsLen} size="small">
                        Н/Я
                    </PieChart>
                </Content>
            )}
            {status === 'failed' && <Subtext>Нет данных</Subtext>}
        </AcadPerformanceStatWidgetStyled>
    )
}

export default AcadPerformanceStatWidget
