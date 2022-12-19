import { STUDENTS_LOGINS_ROUTE } from '@app/routes/teacher-routes'
import { adminLinksModel } from '@entities/admin-links'
import PageIsNotReady from '@pages/page-is-not-ready'
import { FormBlock } from '@ui/atoms'
import React from 'react'
import styled from 'styled-components'
import { SliderPage } from 'widgets'
import DownloadAccepts from './pages/accepts'
import AdditionalAgreements from './pages/additional-agreements'
import DownloadCheckdata from './pages/checkdata'

const DownloadAdminFilesPageWrapper = styled.div`
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: var(--text);
`

const DownloadAdminFilesPage = () => {
    const { data } = adminLinksModel.selectors.use()
    return (
        <DownloadAdminFilesPageWrapper>
            <FormBlock>
                <SliderPage
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
            </FormBlock>
        </DownloadAdminFilesPageWrapper>
    )
}

export default DownloadAdminFilesPage
