import { AdminLink } from '@api/model'
import { Colors } from '@shared/constants/consts'
import { adminLinksModel } from '@entities/admin-links'
import { Divider, LinkButton, Message, Title } from '@ui/atoms'
import { DateInterval } from '@ui/molecules'
import React, { useState } from 'react'
import { FiDownload, FiInfo } from 'react-icons/fi'
import styled from 'styled-components'
import getMessage from './lib/get-message'

const AdminLinksTemplateWrapper = styled.div`
    .content {
        display: flex;
        flex-direction: column;
        gap: 20px;

        section {
            display: flex;
            gap: 10px;
        }
    }
`

interface Props {
    title: string
    links: Nullable<AdminLink[]>
}

const AdminLinksTemplate = ({ title, links }: Props) => {
    const [dates, setDates] = useState(['', ''])
    const [validDates, setValidDates] = useState(true)
    const { data } = adminLinksModel.selectors.useData()

    if (!data) return null

    return (
        <AdminLinksTemplateWrapper>
            <Title size={3} align="left" bottomGap>
                {title}
            </Title>
            <div className="content">
                <DateInterval dates={dates} setDates={setDates} valid={validDates} setValid={setValidDates} />
                <Message type="info" title={getMessage(dates) ?? ''} icon={<FiInfo />} />
                {links?.map((link, i) => {
                    const href = link.url + '&date_from=' + dates[0] + '&date_to=' + dates[1]
                    return (
                        <React.Fragment key={link.title}>
                            <section>
                                <Title size={4} align="left">
                                    {link.title}
                                </Title>
                                <StyledLinkButton
                                    onClick={() => null}
                                    href={href}
                                    text="Загрузить"
                                    icon={<FiDownload />}
                                    isActive={validDates}
                                />
                            </section>
                            {i !== links?.length - 1 && <Divider />}
                        </React.Fragment>
                    )
                })}
            </div>
        </AdminLinksTemplateWrapper>
    )
}

const StyledLinkButton = styled(LinkButton)`
    width: 170px;
    background-color: ${Colors.blue.main};
    color: var(--text);
`

export default AdminLinksTemplate
