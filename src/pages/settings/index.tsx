import React from 'react'
import { ListOfSettings } from '@features/settings'
import { CenterPage } from '@shared/ui/atoms'
import Block from '@shared/ui/block'
import { useState } from 'react'
import styled from 'styled-components'
import useSettings from './hooks/use-settings'
import SettingsContent from './settings-content'

const Wrapper = styled.div`
    padding: 10px;
    height: 100vh;
    width: 100%;

    @media (max-width: 800px) {
        width: 100%;
        .settings-page {
            font-size: 0.8em;
        }
    }
`

const SettingsPage = () => {
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState<string[][] | null>(null)
    const fullSettings = useSettings()
    if (fullSettings === null) return null

    return (
        <Wrapper>
            <CenterPage height="100%">
                <Block
                    width="100%"
                    maxWidth="1000px"
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
                </Block>
            </CenterPage>
        </Wrapper>
    )
}

export default SettingsPage
