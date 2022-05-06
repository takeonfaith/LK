import { menuModel } from '@entities/menu'
import LinksList from '@features/home/ui/organisms/links-list'
import { LocalSearch } from '@ui/molecules'
import React from 'react'
import styled from 'styled-components'

const AllPagesWrapper = styled.div`
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
    @media (max-width: 600px) {
        padding: 5px;
    }
`

const AllPages = () => {
    const { visibleRoutes } = menuModel.selectors.useMenu()
    return visibleRoutes ? (
        <AllPagesWrapper>
            <LocalSearch
                placeholder="Поиск разделов"
                whereToSearch={undefined}
                searchEngine={() => null}
                setResult={() => null}
            />
            <LinksList align="left" links={visibleRoutes} />
        </AllPagesWrapper>
    ) : null
}

export default AllPages
