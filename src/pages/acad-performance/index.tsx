import { acadPerformanceModel } from '@entities/acad-performance'
import Select from '@features/select'
import { Wrapper } from '@ui/atoms'
import React, { useEffect, useState } from 'react'

const items = {
    0: '1 cеместр',
    1: '2 cеместр',
    2: '3 cеместр',
    3: 'За все время',
}

const AcadPerformance = () => {
    const [selected, setSelected] = useState<number>(0)
    const { data, loading } = acadPerformanceModel.selectors.useAcadPerformance()

    useEffect(() => {
        acadPerformanceModel.effects.getAcadPerformanceFx({
            userId: '1',
            semestr: '1',
        })
    }, [])

    return (
        <Wrapper loading={loading}>
            <Select items={items} selected={selected} setSelected={setSelected} />
        </Wrapper>
    )
}

export default AcadPerformance
