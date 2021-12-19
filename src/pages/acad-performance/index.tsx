import { acadPerformanceModel } from '@entities/acad-performance'
import { GraphicInfo, SubjectList } from '@features/acad-performance/ui/organisms'
import Select from '@features/select'
import { SkeletonShape, Wrapper } from '@ui/atoms'
import React, { useEffect, useState } from 'react'

const items = {
    0: '1 cеместр',
    1: '2 cеместр',
    2: '3 cеместр',
    3: '4',
    5: '5',
    6: '6',
    7: '7',
}

const AcadPerformance = () => {
    const [selected, setSelected] = useState<number>(5)
    const { data, loading, error } = acadPerformanceModel.selectors.useAcadPerformance()

    useEffect(() => {
        if (data) {
            acadPerformanceModel.effects.getAcadPerformanceFx({ semestr: `${selected + 1}` })
        }
    }, [selected])

    return (
        <div style={{ padding: '40px' }}>
            <Wrapper
                loading={loading}
                load={() => acadPerformanceModel.effects.getAcadPerformanceFx({ semestr: `${selected + 1}` })}
                error={error}
                data={data}
            >
                <>
                    <Select items={items} selected={selected} setSelected={setSelected} />
                    {/* {data ? <GraphicInfo data={data} /> : null} */}
                    {data && <SubjectList header={'Экзамены'} items={data.exam} />}
                    {data && <SubjectList header={'Зачеты'} items={data.test} type={'test'} />}
                </>
            </Wrapper>
        </div>
    )
}

export default AcadPerformance
