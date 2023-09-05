import retakeRoutes from '@features/schedule/config/retake-routes'
import List from '@ui/list'
import React from 'react'
import styled from 'styled-components'
import RetakeLink from '../../../../features/schedule/ui/molecules/retake-link'

const LinksListWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    color: var(--text);
`

const RetakeSchedule = () => {
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
                {Object.values(retakeRoutes).map((el) => {
                    return <RetakeLink key={el.id} {...el} />
                })}
            </List>
        </LinksListWrapper>
    )
}

export default RetakeSchedule
