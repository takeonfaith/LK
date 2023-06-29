import search from '@pages/helpful-information/lib/search'
import { HelpfulPage } from '@pages/helpful-information/types/helpful-pages'
import { Error } from '@ui/error'
import List from '@ui/list'
import { LocalSearch } from '@ui/molecules'
import React, { useState } from 'react'
import BlocksList from './blocks-list'

const LinksList = ({ title, blocks, isStaff }: { title: string; blocks: HelpfulPage[]; isStaff: boolean }) => {
    const [searchBlocks, setSearchBlocks] = useState<HelpfulPage[] | null>(null)

    return (
        <List>
            <LocalSearch
                placeholder={`Поиск по ${title}`}
                whereToSearch={blocks}
                searchEngine={search}
                setResult={setSearchBlocks}
                validationCheck
            />
            <BlocksList blocks={searchBlocks ?? blocks} isStaff={isStaff} />
            {searchBlocks?.length === 0 && <Error text="Ничего не найдено" />}
        </List>
    )
}

export default LinksList
