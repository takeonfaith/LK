import { acadPerformanceModel } from '@entities/acad-performance'
import { PreparedData } from '@entities/acad-performance/lib/prepare'
import { AcadPerformance as IAcadPerformance } from '@entities/acad-performance/model'
import { userModel } from '@entities/user'
import createSelectItems from '@features/acad-performance/lib/create-select-items'
import search from '@features/acad-performance/lib/search'
import { GraphicInfo, SubjectList } from '@features/acad-performance/ui/organisms'
import Select from '@features/select'
import { Error, Wrapper } from '@ui/atoms'
import { LocalSearch } from '@ui/molecules'
import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'

const AcadPerformanceWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    height: 100%;
    width: 100%;
    color: var(--text);

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
    const [foundSubjects, setFoundSubjects] = useState<PreparedData | null>(null)

    useEffect(() => {
        acadPerformanceModel.effects.getAcadPerformanceFx({ semestr: `${selected !== -1 ? selected : ''}` })
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
                        <LocalSearch<IAcadPerformance[], PreparedData>
                            whereToSearch={[...(data?.exam ?? []), ...(data?.test ?? [])]}
                            searchEngine={search}
                            setResult={setFoundSubjects}
                            placeholder={'Поиск предметов'}
                        />
                        <SubjectList header={'Экзамены'} items={foundSubjects?.exam ?? data?.exam} loading={loading} />
                        <SubjectList
                            header={'Зачеты'}
                            items={foundSubjects?.test ?? data?.test}
                            type={'test'}
                            loading={loading}
                        />
                    </>
                )}
            </AcadPerformanceWrapper>
        </Wrapper>
    )
}

export default AcadPerformance
