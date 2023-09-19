import { applicationsModel } from '@entities/applications'
import createApplicationSearch from '@features/applications/lib/create-application-search'
import { getTeachersHRSectionLinks } from '@features/applications/lib/get-teachers-section-links'
import PageBlock from '@shared/ui/page-block'
import { Message, Title, Wrapper } from '@ui/atoms'
import { Error } from '@ui/error'
import { LocalSearch } from '@ui/molecules'
import React, { useState } from 'react'
import { FiInfo } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useModal } from 'widgets'

const CreateApplicationListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;

    .list {
        margin-top: 10px;
        height: 100%;

        .links-wrapper {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;

            .link-list {
                display: flex;
                flex-direction: column;
                width: 100%;
                background: var(--block);
                box-shadow: var(--block-shadow);
                padding: 10px;
                border-radius: var(--brLight);

                .links {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    font-size: 0.9em;

                    & a {
                        text-decoration: none;
                        color: var(--blue);
                    }
                    .disabled-link {
                        cursor: not-allowed;
                        opacity: 0.5;
                        text-decoration: none;
                        pointer-events: none;
                    }
                }
            }
        }
    }

    @media (min-width: 1001px) {
        .list {
            .links-wrapper {
                .link-list {
                    padding: 5px;
                }
            }
        }
    }

    @media (max-width: 800px) {
        .list {
            .links-wrapper {
                .link-list {
                    width: 100%;
                }
            }
        }
    }
`

const LinksList = styled.div`
    padding: 12px;
    box-shadow: var(--block-shadow);
    border-radius: 8px;
    margin: 10px 0;

    .links {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
`
export interface Section {
    title: string
    disabled?: boolean
    links: { title: string; link: string; isExternalLink?: boolean; isOpenInNewWindow?: boolean }[]
}

interface Props {
    isTeachers: boolean
}

const TeachersHrApplicationsPage = ({}: Props) => {
    const {
        data: { listApplication },
        error,
    } = applicationsModel.selectors.useApplications()
    const { close } = useModal()
    const sections: Section[] = getTeachersHRSectionLinks()
    const [search, setSearch] = useState<string>('')

    const [foundSections, setFoundSections] = useState<Section[] | null>(sections)
    return (
        <Wrapper
            load={() => applicationsModel.effects.getApplicationsFx()}
            loading={!listApplication}
            error={error}
            data={listApplication}
        >
            <PageBlock>
                <Message type="info" title="Информация" icon={<FiInfo />}>
                    Данный сервис создан для упрощения оборота кадровых документов внутри Университета.
                </Message>

                <CreateApplicationListWrapper>
                    <Title size={3} align="left" bottomGap>
                        Создать заявление
                    </Title>

                    <LocalSearch
                        whereToSearch={sections}
                        searchEngine={createApplicationSearch}
                        setResult={setFoundSections}
                        placeholder="Поиск заявления"
                        setExternalValue={setSearch}
                    />
                    <LinksList>
                        {(foundSections ?? sections).map((section) => {
                            return (
                                <div className="link-list" key={section.title}>
                                    {!section.disabled && (
                                        <div className="links">
                                            {section.links.map((link) =>
                                                link.isExternalLink ? (
                                                    <a
                                                        key={link.title}
                                                        href={link.link}
                                                        target={link.isOpenInNewWindow ? '_blank' : '_self'}
                                                        rel="noreferrer"
                                                    >
                                                        {link.title}
                                                    </a>
                                                ) : (
                                                    <Link to={link.link} key={link.link} onClick={close}>
                                                        {link.title}
                                                    </Link>
                                                ),
                                            )}
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                        {!foundSections?.length && !!search.length && (
                            <Error text={`По запросу ${search} ничего не найдено`} />
                        )}
                    </LinksList>
                </CreateApplicationListWrapper>
            </PageBlock>
        </Wrapper>
    )
}

export default TeachersHrApplicationsPage
