import { FormBlock } from '@ui/atoms'
import React from 'react'
import styled from 'styled-components'
import { SliderPage } from 'widgets'
import DownloadAccepts from './pages/accepts'
import DownloadAgreements from './pages/agreements'

const DownloadAdminFilesPageWrapper = styled.div`
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`

const DownloadAdminFilesPage = () => {
    return (
        <DownloadAdminFilesPageWrapper>
            <FormBlock>
                <SliderPage
                    pages={[
                        { title: 'Анкета', content: <DownloadAgreements /> },
                        { title: 'Акцепт', content: <DownloadAccepts />, condition: false },
                    ]}
                />
            </FormBlock>
        </DownloadAdminFilesPageWrapper>
    )
}

export default DownloadAdminFilesPage
