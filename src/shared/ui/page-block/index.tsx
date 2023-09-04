import React from 'react'
import BlockWrapper from '../block/styles'
import styled from 'styled-components'
import { CenterPage } from '../atoms'
import useCurrentExactPage from '@shared/lib/hooks/use-current-exact-page'
import { getPageWidth } from './lib/get-page-width'

const PageBlockStyled = styled(BlockWrapper)`
    position: relative;

    @media (min-width: 1001px) {
        padding-top: 70px;
    }
`

const TopRightCornerElement = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 100%;
    display: flex;
    justify-content: flex-end;

    @media (max-width: 1000px) {
        top: -55px;
        right: 7px;
    }
`

type Props = {
    children: ChildrenType
    topRightCornerElement?: ChildrenType
    padding?: string
}

const PageBlock = ({ children, topRightCornerElement, padding }: Props) => {
    const { exactCurrentPage } = useCurrentExactPage()
    const maxWidth = getPageWidth(exactCurrentPage)

    return (
        <CenterPage padding="0 0 10px 0">
            <PageBlockStyled
                justifyContent="flex-start"
                height="100%"
                orientation="vertical"
                maxWidth={maxWidth}
                gap="24px"
                alignItems="flex-start"
                noAppearanceInMobile
                padding={padding}
            >
                {topRightCornerElement && <TopRightCornerElement>{topRightCornerElement}</TopRightCornerElement>}
                {children}
            </PageBlockStyled>
        </CenterPage>
    )
}

export default PageBlock
