import { projectActivitesModel } from '@entities/project-activites'
import { Content } from '@features/project-activites/ui/templates'
import Select from '@features/select'
import { Wrapper } from '@ui/atoms'
import React from 'react'

const ProjectActivitiesPage = () => {
    const { data, loading, error } = projectActivitesModel.selectors.useProjectActivites()

    console.log(error, loading, data)
    return (
        <Wrapper
            load={() => projectActivitesModel.effects.getProjectActivitesFx('1')}
            loading={loading || false}
            error={error || null}
            data={data}
        >
            {data && data[0] && <Content data={data[0]} />}
        </Wrapper>
    )
}

export default ProjectActivitiesPage
