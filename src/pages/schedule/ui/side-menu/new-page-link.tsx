import { IRoute } from '@app/routes/general-routes'
import { Colors } from '@shared/constants'
import Flex from '@shared/ui/flex'
import Subtext from '@shared/ui/subtext'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

type StyleProps = {
    isCurrent: boolean
    disabled?: boolean
}

const NewPageLinkWrapper = styled(Link)<StyleProps>`
    color: var(--text);
    padding: 15px 15px;
    width: 140px;
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
    border-radius: 10px;
    background: ${({ isCurrent }) => (isCurrent ? Colors.blue.transparent3 : 'var(--schedule)')};
    color: ${({ isCurrent }) => (isCurrent ? 'var(--blue)' : 'var(--grey)')};

    &:hover {
        filter: brightness(0.97);
    }
`

const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
        width: 18px;
        min-width: 18px;
        height: 18px;
    }
`

const LinkTitle = styled.div<{ isCurrent: boolean }>`
    font-weight: ${({ isCurrent }) => (isCurrent ? 500 : 400)};
    font-size: 0.9rem;
`

type Props = StyleProps & {
    route: IRoute | undefined
}

export const NewPageLink = ({ route, disabled = false, isCurrent = false }: Props) => {
    if (!route) return <Subtext>Ссылка не определена</Subtext>

    const { path, title, icon, color, shortTitle } = route

    const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
        if (disabled) {
            return e.preventDefault()
        }
    }

    return (
        <NewPageLinkWrapper disabled={disabled} isCurrent={isCurrent} to={path} color={color} onClick={handleClick}>
            <Flex gap="8px">
                <IconWrapper>{icon}</IconWrapper>
                <LinkTitle isCurrent={isCurrent}>{shortTitle ?? title}</LinkTitle>
            </Flex>
        </NewPageLinkWrapper>
    )
}
