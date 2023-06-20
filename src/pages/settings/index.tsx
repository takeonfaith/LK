import { CenterPage } from '@shared/ui/atoms'
import Flex from '@shared/ui/flex'
import PageBlock from '@shared/ui/page-block'
import React, { useState } from 'react'
import useSettings from './hooks/use-settings'
import SettingsContent from './settings-content'
import ListOfSettings from './ui/list-of-settings'

const SettingsPage = () => {
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState<string[][] | null>(null)
    const fullSettings = useSettings()
    if (fullSettings === null) return null

    return (
        <CenterPage padding="10px">
            <PageBlock>
                <Flex ai="flex-start">
                    <ListOfSettings
                        settingsConfig={fullSettings}
                        setSearchResult={setSearchResult}
                        setSearchValue={setSearchValue}
                    />
                    <SettingsContent
                        searchValue={searchValue}
                        searchResult={searchResult}
                        settingsConfig={fullSettings}
                    />
                </Flex>
            </PageBlock>
        </CenterPage>
    )
}

export default SettingsPage
