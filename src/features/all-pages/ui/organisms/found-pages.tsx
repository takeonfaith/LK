import { IRoutes } from '@app/routes/general-routes'
import { Error } from '@ui/error'
import React from 'react'
import styled from 'styled-components'
import { PageLink } from '../molecules'

const FoundPagesWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
`

interface Props {
    pages: IRoutes | null
}

const FoundPages = ({ pages }: Props) => {
    if (!pages) return null

    if (!Object.keys(pages).length) return <Error text="Ничего не было найдено" />

    return (
        <FoundPagesWrapper>
            {Object.values(pages).map((page) => {
                return (
                    page?.show !== false && <PageLink {...page} orientation="horizontal" shadow={false} key={page.id} />
                )
            })}
        </FoundPagesWrapper>
    )
}

export default FoundPages
