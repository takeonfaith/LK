import { projectActivitesModel } from '@entities/project-activites'
import { userModel } from '@entities/user'
import createSelectItems from '@features/acad-performance/lib/create-select-items'
import { Content } from '@features/project-activites/ui/templates'
import Select, { SelectPage } from '@features/select'
import { Wrapper, Error } from '@ui/atoms'
import findSemestr from '@utils/find-semestr'
import React, { useMemo, useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 30px;
    height: 100%;
`

const ProjectActivitiesPage = () => {
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const { data, loading, error } = projectActivitesModel.selectors.useProjectActivites()

    const [selected, setSelected] = useState<SelectPage>({
        id: findSemestr(new Date().toString(), user?.course ?? 1),
        title: findSemestr(new Date().toString(), user?.course ?? 1).toString() + ' семестр',
    })

    const items = useMemo(() => createSelectItems(user?.course ?? 0), [user])

    console.log(selected?.id)
    return (
        <Wrapper
            load={() => projectActivitesModel.effects.getProjectActivitesFx('1')}
            loading={loading || false}
            error={error || null}
            data={data}
        >
            <Container>
                {!!user?.id && <Select items={items} selected={selected} setSelected={setSelected} />}
                {data && data[selected.id] ? (
                    <Content data={data[selected.id]} />
                ) : (
                    <Error text={'Данных за этот семестр нет, попробуйте другой!'} />
                )}
            </Container>
        </Wrapper>
    )
}

export default ProjectActivitiesPage
