import React, { useMemo } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { CenterPage, Title } from '@ui/atoms'
import BlockWrapper from '@ui/block/styles'
import { Slider } from 'widgets'
import pagesConfig from './config/pages-config'
import { userModel } from '@entities/user'

const HelpfulInformation = () => {
    const [page, setPage] = useState<number>(0)
    const { data: userData } = userModel.selectors.useUser()
    const stuffMode = useMemo(() => userData?.user?.user_status === 'staff', [userData])

    const configs = useMemo(
        () => (stuffMode ? pagesConfig.filter((_, index) => index !== 2) : pagesConfig),
        [stuffMode, pagesConfig],
    )

    const pageBlocks = configs[page]

    // TODO: add search (previous version had a gag)
    return (
        <CenterPage alignItems="flex-start" padding="10px">
            <CustomBlock orientation="vertical" gap="10px" maxWidth="1225px" height="fit-content">
                <Title size={2} align="left">
                    Полезная информация
                </Title>
                {/* <LocalSearch<any, any>
                    placeholder="Поиск документов"
                    whereToSearch={{}}
                    searchEngine={() => {}}
                    setResult={() => {}}
                /> */}
                <Slider
                    pages={
                        stuffMode
                            ? [
                                  {
                                      title: 'Полезная информация',
                                  },
                                  {
                                      title: 'Инструкции',
                                  },
                                  {
                                      title: 'Положения',
                                  },
                                  {
                                      title: 'Приказы',
                                  },
                              ]
                            : [
                                  {
                                      title: 'Полезная информация',
                                  },
                                  {
                                      title: 'Инструкции',
                                  },
                                  {
                                      title: 'Курсы',
                                  },
                              ]
                    }
                    currentPage={page}
                    setCurrentPage={setPage}
                />
                <ContentWrapper>
                    {pageBlocks.map(({ title, links }, index) => (
                        <ContentBlock key={title + index}>
                            <Title size={3} align="left">
                                {title}
                            </Title>
                            <div>
                                {links.map(({ title: linkTitle, href, visible }, index) => {
                                    if ((visible === 'staff' && !stuffMode) || (visible === 'student' && stuffMode)) {
                                        return null
                                    }

                                    return (
                                        <CustomLink key={linkTitle + index} href={href} target="_blank">
                                            {linkTitle}
                                        </CustomLink>
                                    )
                                })}
                            </div>
                        </ContentBlock>
                    ))}
                </ContentWrapper>
            </CustomBlock>
        </CenterPage>
    )
}

const CustomBlock = styled(BlockWrapper)`
    align-items: flex-start;

    .wrapper {
        display: flex;
        gap: 20px;
        width: 100%;
    }

    a {
        text-decoration: none;
        color: var(--blue);
    }
`

const ContentWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`

const ContentBlock = styled.div`
    flex: 1 1 auto;
    margin-right: 20px;
    margin-top: 20px;
    background: var(--theme);
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 24px;
`

const CustomLink = styled.a`
    display: block;
    font-size: 18px;
    line-height: 22px;
    margin-top: 20px;
`

export default HelpfulInformation
