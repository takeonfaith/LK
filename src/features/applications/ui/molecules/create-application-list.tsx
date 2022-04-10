import createApplicationSearch from '@features/applications/lib/create-application-search'
import getSectionLinks from '@features/applications/lib/get-section-links'
import { Error } from '@ui/error'
import { LocalSearch } from '@ui/molecules'
import { Title } from '@ui/title'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useModal } from 'widgets'

const CreateApplicationListWrapper = styled.div`
    @media (min-width: 1001px) {
        width: 100%;
        max-width: 900px;
        min-width: 900px;
        max-height: 600px;
    }

    display: flex;
    flex-direction: column;
    height: 100%;

    .list {
        padding: 5px;
        margin-top: 10px;
        overflow-y: auto;
        height: 100%;

        .links-wrapper {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;

            .link-list {
                display: flex;
                flex-direction: column;
                width: calc(50% - 5px);
                background: var(--schedule);
                box-shadow: var(--schedule-shadow);
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
                }
            }
        }
    }

    @media (max-width: 800px) {
        .list {
            .link-list {
                width: 100%;
            }
        }
    }
`

export interface Section {
    title: string
    links: { title: string; link: string }[]
}

const CreateApplicationList = () => {
    const { close } = useModal()
    const sections: Section[] = getSectionLinks()
    const [search, setSearch] = useState<string>('')

    const [foundSections, setFoundSections] = useState<Section[] | null>(sections)
    return (
        <CreateApplicationListWrapper>
            <Title size={3} align="left" bottomGap>
                Создать заявку
            </Title>
            <LocalSearch
                whereToSearch={sections}
                searchEngine={createApplicationSearch}
                setResult={setFoundSections}
                placeholder="Поиск заявок"
                setExternalValue={setSearch}
            />
            <div className="list">
                <div className="links-wrapper">
                    {(foundSections ?? sections).map((section) => {
                        return (
                            <div className="link-list" key={section.title}>
                                <Title size={4} align="left" bottomGap>
                                    {section.title}
                                </Title>
                                <div className="links">
                                    {section.links.map((link) => {
                                        return (
                                            <Link to={link.link} key={link.link} onClick={close}>
                                                {link.title}
                                            </Link>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                    {!foundSections?.length && !!search.length && (
                        <Error text={`По запросу ${search} ничего не найдено`} />
                    )}
                </div>
            </div>
        </CreateApplicationListWrapper>
    )
}

export default CreateApplicationList
