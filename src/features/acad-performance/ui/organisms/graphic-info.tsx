import { acadPerformanceModel } from '@entities/acad-performance'
import findPercentage from '@features/acad-performance/lib/find-percentage'
import { IColors } from '@shared/consts'
import { Button } from '@shared/ui/button'
import Flex from '@shared/ui/flex'
import { DotPages } from '@shared/ui/molecules'
import PieChart from '@shared/ui/pie-chart'
import React, { useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import styled from 'styled-components'

const Wrap = styled.div`
    display: flex;
    gap: 16px;

    @media (max-width: 330px) {
        flex-direction: column;
        align-items: center;
    }
`

const Circle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 1000px) {
        width: 200px;
    }
`

const Buttons = styled.div`
    position: absolute;
    left: 50%;
    top: 120%;
    transform: translate(-50%, 0%);
    display: flex;
    align-items: center;
`

const GraphicInfo = () => {
    const { preparedData, loading } = acadPerformanceModel.selectors.useData()

    const [circleMode, setCircleMode] = useState(0)
    const examPercentage = '0'
    const easyExamPercentage = preparedData?.test.length ? findPercentage(preparedData.test) : '0'
    const examsText = ['Сдано', 'На 5', 'На 4']
    const examColors: (keyof IColors)[] = ['lightBlue', 'green', 'blue']

    const nextMode = () => setCircleMode((prev) => Math.min(2, prev + 1))
    const prevMode = () => setCircleMode((prev) => Math.max(0, prev - 1))

    return (
        <Wrap>
            <Circle>
                <PieChart
                    color={examColors[circleMode]}
                    percent={+examPercentage / 100}
                    loading={loading}
                    label={`${examPercentage}%`}
                    size="small"
                >
                    <Flex ai="center" jc="center">
                        <Buttons>
                            <Button
                                icon={<FiChevronLeft />}
                                width="20px"
                                height="20px"
                                background="var(--theme)"
                                onClick={prevMode}
                            />
                            <DotPages color={examColors[circleMode]} amount={3} current={circleMode} />
                            <Button
                                icon={<FiChevronRight />}
                                width="20px"
                                height="20px"
                                background="var(--theme)"
                                onClick={nextMode}
                            />
                        </Buttons>
                        {examsText[circleMode]}
                    </Flex>
                </PieChart>
            </Circle>
            <Circle>
                <PieChart
                    color="lightBlue"
                    percent={+easyExamPercentage / 100}
                    loading={loading}
                    label={`${easyExamPercentage}%`}
                    size="small"
                >
                    Зачет
                </PieChart>
            </Circle>
        </Wrap>
    )
}

export default GraphicInfo
