import React from 'react'
import { OLD_LK_URL } from '@consts'
import { Error } from '@ui/error'
import { LinkButton } from '@ui/atoms'
// import { TemplateApplications } from 'widgets'

const ApplicationsPage = () => {
    return (
        <Error text={'Cервис временно недоступен. для того, чтобы воспользоваться им, перейдите на старую версию'}>
            <LinkButton
                text={'Перейти к версии в старом дизайне'}
                background="var(--purple)"
                width="300px"
                href={`${OLD_LK_URL}/?p=sprav`}
            />
        </Error>
    )
    // return <TemplateApplications isTeachers={false} />
}

export default ApplicationsPage
