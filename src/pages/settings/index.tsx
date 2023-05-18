import React from 'react'
import { ListOfSettings } from '@features/settings'
import { CenterPage } from '@shared/ui/atoms'
import { useState } from 'react'
import styled from 'styled-components'
import useSettings from './hooks/use-settings'
import SettingsContent from './settings-content'
import BlockWrapper from '@shared/ui/block/styles'

const Wrapper = styled.div`
    padding: 10px;
    height: 100vh;
    width: 100%;

    @media (max-width: 800px) {
        width: 100%;
        padding: 0;
        height: calc(100vh - 60px);
        gap: 0 !important;
        .settings-page {
            font-size: 0.8em;
        }
    }
`

const SettingsBlock = styled(BlockWrapper)`
    @media (max-width: 768px) {
        flex-direction: row;
    }
`

const SettingsPage = () => {
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState<string[][] | null>(null)
    const fullSettings = useSettings()
    if (fullSettings === null) return null

    return (
        <Wrapper>
            <StyledCenterPage>
                <SettingsBlock
                    width="100%"
                    maxWidth="1000px"
                    noAppearanceInMobile
                    height="700px"
                    maxHeight="100vh"
                    gap="0"
                    padding="0"
                    alignItems="flex-start"
                >
                    <ListOfSettings
                        setSearchValue={setSearchValue}
                        setSearchResult={setSearchResult}
                        settingsConfig={fullSettings}
                    />
                    <SettingsContent
                        searchValue={searchValue}
                        searchResult={searchResult}
                        settingsConfig={fullSettings}
                    />
                </SettingsBlock>
            </StyledCenterPage>
        </Wrapper>
    )
}

const StyledCenterPage = styled(CenterPage)`
    height: 100%;
`

export default SettingsPage
