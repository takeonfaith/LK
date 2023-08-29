import React, { ForwardedRef, forwardRef } from 'react'
import BlockWrapper from '../block/styles'
import styled from 'styled-components'
import { CenterPage } from '../atoms'
import useCurrentExactPage from '@shared/lib/hooks/use-current-exact-page'
import { getPageWidth } from './lib/get-page-width'

const PageBlockStyled = styled(BlockWrapper)`
    position: relative;

    @media (min-width: 551px) {
        padding-top: 70px;
    }

    @media (max-width: 550px) {
        padding-top: 50px;
    }
`

const TopRightCornerElement = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 100%;
    display: flex;
    justify-content: flex-end;

    @media (max-width: 550px) {
        top: -4px;
        right: 7px;
    }
`

type Props = {
    children: ChildrenType
    topRightCornerElement?: ChildrenType
    padding?: string
}

const PageBlock = forwardRef(
    ({ children, topRightCornerElement, padding }: Props, ref: ForwardedRef<HTMLDivElement>) => {
        const currentPage = useCurrentExactPage()
        const maxWidth = getPageWidth(currentPage)

        return (
            <CenterPage padding="0 0 10px 0">
                <PageBlockStyled
                    justifyContent="flex-start"
                    height="100%"
                    orientation="vertical"
                    maxWidth={maxWidth}
                    gap="24px"
                    ref={ref}
                    alignItems="flex-start"
                    noAppearanceInMobile
                    padding={padding}
                >
                    {topRightCornerElement && <TopRightCornerElement>{topRightCornerElement}</TopRightCornerElement>}
                    {children}
                </PageBlockStyled>
            </CenterPage>
        )
    },
)

PageBlock.displayName = 'PageBlock'

export default PageBlock
