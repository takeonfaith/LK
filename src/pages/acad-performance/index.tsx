import { acadPerformanceModel } from '@entities/acad-performance'
import { userModel } from '@entities/user'
import createSelectItems from '@features/acad-performance/lib/create-select-items'
import { GraphicInfo, SubjectList } from '@features/acad-performance/ui/organisms'
import Select from '@features/select'
import { Wrapper, Error } from '@ui/atoms'
import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'

const AcadPerformanceWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    height: 100%;
    width: 100%;

    & > * + * {
        margin-top: 20px;
    }
    @media (max-width: 1000px) {
        padding: 0px;
    }
`

const AcadPerformance = () => {
    const { data, loading, error } = acadPerformanceModel.selectors.useAcadPerformance()
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const items = useMemo(() => createSelectItems(user?.course ?? 0), [user])
    const [selected, setSelected] = useState<number>(1)

    useEffect(() => {
        if (data) {
            acadPerformanceModel.effects.getAcadPerformanceFx({ semestr: `${selected !== -1 ? selected : ''}` })
        }
    }, [selected])

    return (
        <Wrapper
            loading={loading}
            load={() =>
                acadPerformanceModel.effects.getAcadPerformanceFx({ semestr: `${selected !== -1 ? selected : ''}` })
            }
            error={error}
            data={data}
        >
            <AcadPerformanceWrapper>
                <Select items={items} selected={selected} setSelected={setSelected} />
                {data?.exam?.length === 0 && data?.test.length === 0 && !loading ? (
                    <Error text={'Данных за этот семестр нет, попробуйте другой!'} />
                ) : (
                    <>
                        <GraphicInfo />
                        <SubjectList header={'Экзамены'} items={data?.exam} loading={loading} />
                        <SubjectList header={'Зачеты'} items={data?.test} type={'test'} loading={loading} />
                    </>
                )}
            </AcadPerformanceWrapper>
        </Wrapper>
    )
}

export default AcadPerformance
