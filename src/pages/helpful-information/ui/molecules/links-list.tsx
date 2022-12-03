import { Colors } from '@consts'
import search from '@pages/helpful-information/lib/search'
import { HelpfulPage } from '@pages/helpful-information/types/helpful-pages'
import { Error } from '@ui/error'
import List from '@ui/list'
import { LocalSearch } from '@ui/molecules'
import { Title } from '@ui/title'
import React, { useState } from 'react'
import styled from 'styled-components'

const CustomBlock = styled.div`
    width: 100%;
    border-radius: var(--brLight);
    background: ${Colors.grey.transparentAF};
    padding: 16px;
`

const LinksList = ({ title, blocks, isStaff }: { title: string; blocks: HelpfulPage[]; isStaff: boolean }) => {
    const [searchBlocks, setSearchBlocks] = useState<HelpfulPage[] | null>(null)

    return (
        <List padding="4px">
            <LocalSearch
                placeholder={`Поиск по ${title}`}
                whereToSearch={blocks}
                searchEngine={search}
                setResult={setSearchBlocks}
                validationCheck
            />
            {(searchBlocks ?? blocks).map(({ title, links }, index) => {
                return (
                    <CustomBlock key={title + index}>
                        <Title size={3} align="left" bottomGap="16px">
                            {title}
                        </Title>
                        <List gap={16}>
                            {links.map(({ title: linkTitle, href, visible }, index) => {
                                if ((visible === 'staff' && !isStaff) || (visible === 'student' && isStaff)) {
                                    return null
                                }

                                return (
                                    <a key={linkTitle + index} href={href} target="_blank" rel="noreferrer">
                                        {linkTitle}
                                    </a>
                                )
                            })}
                        </List>
                    </CustomBlock>
                )
            })}

            {searchBlocks?.length === 0 && <Error text="Ничего не найдено" />}
        </List>
    )
}

export default LinksList
