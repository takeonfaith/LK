import { STUDENTS_LOGINS_ROUTE } from '@app/routes/teacher-routes'
import { adminLinksModel } from '@entities/admin-links'
import PageIsNotReady from '@pages/page-is-not-ready'
import PageBlock from '@shared/ui/page-block'
import React from 'react'
import { SliderPage } from 'widgets'
import DownloadAccepts from './pages/accepts'
import AdditionalAgreements from './pages/additional-agreements'
import DownloadCheckdata from './pages/checkdata'
import { CenterPage } from '@shared/ui/atoms'

const DownloadAdminFilesPage = () => {
    const { data } = adminLinksModel.selectors.useData()
    return (
        <CenterPage padding="10px">
            <PageBlock>
                <SliderPage
                    appearance={false}
                    pages={[
                        { title: 'Анкета', content: <DownloadCheckdata />, condition: !!data?.checkdata.length },
                        { title: 'Акцепт', content: <DownloadAccepts />, condition: !!data?.accepts.length },
                        {
                            title: 'Доп. соглашения',
                            content: <AdditionalAgreements />,
                            condition: !!data?.agreements.length,
                        },
                        {
                            title: 'Логины студентов',
                            content: <PageIsNotReady oldVersionUrl={STUDENTS_LOGINS_ROUTE} />,
                            condition: !!data?.studLogins?.length,
                        },
                    ]}
                />
            </PageBlock>
        </CenterPage>
    )
}

export default DownloadAdminFilesPage
