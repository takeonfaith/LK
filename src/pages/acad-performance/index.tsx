import { AcadPerformance as IAcadPerformance } from '@api/model/acad-performance'
import { acadPerformanceModel } from '@entities/acad-performance'
import { PreparedData } from '@entities/acad-performance/lib/prepare'
import { userModel } from '@entities/user'
import createSelectItems from '@features/acad-performance/lib/create-select-items'
import search from '@features/acad-performance/lib/search'
import { SubjectList } from '@features/acad-performance/ui/organisms'
import Select, { SelectPage } from '@features/select'
import Flex from '@shared/ui/flex'
import PageBlock from '@shared/ui/page-block'
import { Button, Error, Wrapper } from '@ui/atoms'
import { LocalSearch } from '@ui/molecules'
import findSemestr from '@utils/find-semestr'
import React, { useMemo, useState } from 'react'
import { FiPieChart } from 'react-icons/fi'
import { HiOutlineEmojiSad } from 'react-icons/hi'
import PerformanceMessage from './ui/performance-message'

const AcadPerformance = () => {
    const { data, loading, error } = acadPerformanceModel.selectors.useData()
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const items = useMemo(() => createSelectItems(user?.course ?? 0), [user])

    const [selected, setSelected] = useState<SelectPage | null>({
        id: findSemestr(new Date().toString(), user?.course ?? 1),
        title: findSemestr(new Date().toString(), user?.course ?? 1).toString() + ' семестр',
    })
    const [foundSubjects, setFoundSubjects] = useState<PreparedData | null>(null)
    const noDataError = data?.exam?.length === 0 && data?.test.length === 0 && !loading
    const notFoundError = foundSubjects?.exam.length === 0 && foundSubjects?.test.length === 0 && !loading

    const loadSemestrFilter = `${selected?.id !== -1 ? selected?.id : ''}`

    const loadFunc = (page?: SelectPage) => {
        acadPerformanceModel.effects.getFx({
            semestr: page ? `${page?.id !== -1 ? page?.id : ''}` : loadSemestrFilter,
        })
    }

    return (
        <Wrapper loading={loading} load={loadFunc} error={error} data={data}>
            <PageBlock
                topRightCornerElement={
                    !!user?.id && (
                        <Flex w="188px" gap="8px">
                            <Select
                                onClick={loadFunc}
                                width="150px"
                                items={items}
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <Button minWidth="38px" height="38px" icon={<FiPieChart />} />
                        </Flex>
                    )
                }
            >
                {noDataError ? (
                    <Error text={'Данных за этот семестр нет, попробуйте другой!'} />
                ) : (
                    <>
                        {/* <GraphicInfo /> */}
                        {!foundSubjects && !loading && <PerformanceMessage data={data} />}
                        <LocalSearch<IAcadPerformance[], PreparedData>
                            whereToSearch={[...(data?.exam ?? []), ...(data?.test ?? [])]}
                            searchEngine={search}
                            setResult={setFoundSubjects}
                            placeholder={'Поиск предметов'}
                            loadingOnType
                        />
                        {notFoundError && (
                            <Error text={'По данному запросу ничего не найдено'} image={<HiOutlineEmojiSad />} />
                        )}
                        <SubjectList header={'Экзамены'} items={foundSubjects?.exam ?? data?.exam} loading={loading} />
                        <SubjectList
                            header={'Зачеты'}
                            items={foundSubjects?.test ?? data?.test}
                            type={'test'}
                            loading={loading}
                        />
                    </>
                )}
            </PageBlock>
        </Wrapper>
    )
}

export default AcadPerformance
