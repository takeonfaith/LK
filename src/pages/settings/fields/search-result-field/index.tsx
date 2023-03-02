import { menuModel } from '@entities/menu'
import SettingsSection from '@pages/settings/settings-section'
import { Error } from '@shared/ui/error'
import List from '@shared/ui/list'
import Subtext from '@shared/ui/subtext'
import React from 'react'
import styled from 'styled-components'

const SearchResultItem = styled.div`
    padding: 12px;
    width: 100%;
`

type Props = {
    list: string[][] | null
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SearchResultField = ({ list }: Props) => {
    const { allRoutes } = menuModel.selectors.useMenu()
    if (!allRoutes) return null

    return (
        <SettingsSection>
            <List>
                {list?.length === 0 && <Error text={'Не удалось ничего найти'} />}
                {list?.map((el, i) => (
                    <SearchResultItem key={i}>
                        <Subtext fontSize="0.85rem">
                            {el.map((e, i) => (
                                <>
                                    {e}
                                    {i !== el.length - 1 && ' > '}
                                </>
                            ))}
                        </Subtext>
                    </SearchResultItem>
                ))}
            </List>
        </SettingsSection>
    )
}

export default SearchResultField
