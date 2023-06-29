import { IRoutes } from '@app/routes/general-routes'
import React from 'react'
import styled from 'styled-components'
import LinkItem from './link-item'
import { Divider } from '@shared/ui/divider'

const LinksStyled = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    max-width: 750px;
    border-radius: var(--brLight);
    background: var(--schedule);
    box-shadow: var(--very-mild-shadow);
    overflow-y: hidden;
    height: 90px;

    @media (max-width: 1000px) {
        height: 75px;
    }
`

type Props = {
    links: IRoutes
}

const Links = ({ links }: Props) => {
    const linksKeysArray = Object.keys(links)
    const amount = linksKeysArray.length < 8 ? 8 : Object.keys(links).length
    return (
        <LinksStyled>
            {linksKeysArray.map((key, index) => {
                return (
                    <React.Fragment key={key}>
                        <LinkItem item={links[key]} amount={amount} />
                        {index !== linksKeysArray.length - 1 && (
                            <Divider direction="vertical" margin="10px 0" width="70%" />
                        )}
                    </React.Fragment>
                )
            })}
        </LinksStyled>
    )
}

export default Links
