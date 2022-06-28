import { adminLinksModel } from '@entities/admin-links'
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
    const { data } = adminLinksModel.selectors.useAdminLinks()
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
                    ]}
                />
            </FormBlock>
        </DownloadAdminFilesPageWrapper>
    )
}

export default DownloadAdminFilesPage
