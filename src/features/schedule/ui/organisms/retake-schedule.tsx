import React, { memo } from 'react'
import styled from 'styled-components'
import List from '@ui/list'
import { IRoutes } from '@app/routes/general-routes'
import RetakeLink from '../molecules/retake-link'

const LinksListWrapper = styled.div`
    width: 745px;
    padding: var(--desktop-page-padding);
    display: flex;
    justify-content: center;
    color: var(--text);

    @media (max-width: 1220px) {
        width: 610px;
    }

    @media (max-width: 820px) {
        width: 475px;
    }

    @media (max-width: 600px) {
        padding: 10px;
        width: 415px;
    }

    @media (max-width: 500px) {
        width: calc((33vw * 2) + 5px);
    }

    @media (max-width: 350px) {
        width: calc((33vw * 1) + 5px);
    }
`

type Props = {
    links: IRoutes
}

const RetakeSchedule = ({ links }: Props) => {
    return (
        <LinksListWrapper>
            <List
                direction="horizontal"
                gap={10}
                horizontalAlign={'left'}
                scroll={false}
                wrap={true}
                wrapOnMobile={true}
            >
                {Object.values(links).map((el) => {
                    return <RetakeLink key={el.id} {...el} />
                })}
            </List>
        </LinksListWrapper>
    )
}

export default memo(RetakeSchedule)
