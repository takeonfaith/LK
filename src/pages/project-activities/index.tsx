import { projectActivitesModel } from '@entities/project-activites'
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
            <div>projecвыt</div>
        </Wrapper>
    )
}

export default ProjectActivitiesPage
