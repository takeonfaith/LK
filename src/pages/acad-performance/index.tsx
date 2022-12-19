import { AcadPerformance as IAcadPerformance } from '@api/model/acad-performance'
import { acadPerformanceModel } from '@entities/acad-performance'
import { PreparedData } from '@entities/acad-performance/lib/prepare'
import { userModel } from '@entities/user'
import createSelectItems from '@features/acad-performance/lib/create-select-items'
import search from '@features/acad-performance/lib/search'
import { GraphicInfo, SubjectList } from '@features/acad-performance/ui/organisms'
import Select, { SelectPage } from '@features/select'
import { Error, Wrapper } from '@ui/atoms'
import { LocalSearch } from '@ui/molecules'
import findSemestr from '@utils/find-semestr'
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

    .search-and-filter {
        display: flex;
        align-items: center;
        column-gap: 10px;
        width: 100%;
    }

    & > * + * {
        margin-top: 20px;
    }
    @media (max-width: 1000px) {
        padding: 0px;
    }
`

const AcadPerformance = () => {
    const { data, loading, error } = acadPerformanceModel.selectors.use()
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const items = useMemo(() => createSelectItems(user?.course ?? 0), [user])

    const [selected, setSelected] = useState<SelectPage | null>({
        id: findSemestr(new Date().toString(), user?.course ?? 1),
        title: findSemestr(new Date().toString(), user?.course ?? 1).toString() + ' семестр',
    })
    const [foundSubjects, setFoundSubjects] = useState<PreparedData | null>(null)
    // const [sortDesc, setSortDesc] = useState<boolean>(true)

    useEffect(() => {
        acadPerformanceModel.effects.getFx({
            semestr: `${selected?.id !== -1 ? selected?.id : ''}`,
        })
    }, [selected])

    return (
        <Wrapper
            loading={loading}
            load={() =>
                acadPerformanceModel.effects.getFx({
                    semestr: `${selected?.id !== -1 ? selected?.id : ''}`,
                })
            }
            error={error}
            data={data}
        >
            <AcadPerformanceWrapper>
                {!!user?.id && <Select items={items} selected={selected} setSelected={setSelected} />}
                {data?.exam?.length === 0 && data?.test.length === 0 && !loading ? (
                    <Error text={'Данных за этот семестр нет, попробуйте другой!'} />
                ) : (
                    <>
                        <GraphicInfo />
                        <div className="search-and-filter">
                            <LocalSearch<IAcadPerformance[], PreparedData>
                                whereToSearch={[...(data?.exam ?? []), ...(data?.test ?? [])]}
                                searchEngine={search}
                                setResult={setFoundSubjects}
                                placeholder={'Поиск предметов'}
                            />
                            {/* <Button
                                onClick={() => {
                                    setSortDesc((prev) => !prev)
                                    popUpMessageModel.events.evokePopUpMessage({
                                        type: 'success',
                                        message: `Предметы отсортированны по ${sortDesc ? 'убыванию' : 'возрастанию'}`,
                                    })
                                }}
                                isChosen={sortDesc}
                                icon={sortDesc ? <HiSortAscending /> : <HiSortDescending />}
                            /> */}
                        </div>
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
