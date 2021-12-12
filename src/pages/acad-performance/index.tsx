import { acadPerformanceModel } from '@entities/acad-performance'
import Select from '@features/select'
import { Wrapper } from '@ui/atoms'
import React, { useEffect } from 'react'

const AcadPerformance = () => {
    const { data, loading } = acadPerformanceModel.selectors.useAcadPerformance()

    useEffect(() => {
        acadPerformanceModel.effects.getAcadPerformanceFx({
            userId: '1',
            semestr: '1',
        })
    }, [])

    return (
        <Wrapper loading={loading}>
            <Select />
            {/* <ProgressCircles AcadPerformanceData={data} />
            <ExamsTable
                AcadPerformanceData={data}
                setCurrentSubjectClicked={setCurrentSubjectClicked}
                setOpenStatisticsMenu={setOpenStatisticsMenu}
            />
            <EasyExamsTable
                AcadPerformanceData={data}
                setCurrentSubjectClicked={setCurrentSubjectClicked}
                setOpenStatisticsMenu={setOpenStatisticsMenu}
            />
            <StatisticWindow
                data={data}
                currentNumberOption={currentNumberOption}
                openStatisticsMenu={openStatisticsMenu}
                currentSubjectClicked={currentSubjectClicked}
                setOpenStatisticsMenu={setOpenStatisticsMenu}
            /> */}
        </Wrapper>
    )
}

export default AcadPerformance
