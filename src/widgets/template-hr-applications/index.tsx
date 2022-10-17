import { Application } from '@api/model'
import { applicationsModel } from '@entities/applications'
import getApplicationsColumns from '@features/applications/lib/get-applications-columns'
import search from '@features/applications/lib/search'
import CreateApplicationList from '@features/applications/ui/molecules/create-application-list'
import { Button, FormBlock, Message, Title, Wrapper } from '@ui/atoms'
import List from '@ui/list'
import { LocalSearch } from '@ui/molecules'
import Table from '@ui/table'
import React, { useState } from 'react'
import { FiInfo, FiPlus } from 'react-icons/fi'
import styled from 'styled-components'
import { useModal } from 'widgets'
import createApplicationSearch from '@features/applications/lib/create-application-search'
import getSectionLinks from '@features/applications/lib/get-section-links'
import { Error } from '@ui/error'
import { Link } from 'react-router-dom'
import {getTeachersHRSectionLinks} from '@features/applications/lib/get-teachers-section-links'


const ApplicationPageWrapper = styled.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`
const CreateApplicationListWrapper = styled.div`
    

    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;

    .list {
        padding: 5px 5px 5px 0px;
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
                width: 100%;
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
export interface Section {
    title: string
    disabled?: boolean
    links: { title: string; link: string; isExternalLink?: boolean; isOpenInNewWindow?: boolean }[]
}

interface Props {
    isTeachers: boolean
}

const TeachersHrApplicationsPage = ({ isTeachers }: Props) => {
    const {
        data: { listApplication },
        error,
    } = applicationsModel.selectors.useApplications()
    const { open } = useModal()
    const [applications, setApplications] = useState<Application[] | null>(null)
    const { close } = useModal()
    const sections: Section[] = getTeachersHRSectionLinks()
    const [search, setSearch] = useState<string>('')

    const [foundSections, setFoundSections] = useState<Section[] | null>(sections)
    return (
        <Wrapper load={() => applicationsModel.effects.getApplicationsFx()} loading={!listApplication} error={error} data={listApplication}>
            <ApplicationPageWrapper>
                <FormBlock maxWidth="750px">
                    <Title size={2} align="left">
                        Кадровые заявления
                    </Title>
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
            <div className="list">
                <div className="links-wrapper">
                    {(foundSections ?? sections).map((section) => {
                        return (
                            <div className="link-list" key={section.title}>
                               
                                {!section.disabled && (
                                    <div className="links">
                                        {section.links.map((link) =>
                                            link.isExternalLink ? (
                                                <a
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
                </div>
            </div>
        </CreateApplicationListWrapper>
                    
                </FormBlock>
            </ApplicationPageWrapper>
        </Wrapper>
    )
}

export default TeachersHrApplicationsPage
