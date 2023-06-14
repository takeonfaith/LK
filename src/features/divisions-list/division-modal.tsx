import { ALL_TEACHERS_ROUTE } from '@app/routes/general-routes'
import { Icon } from '@features/all-pages'
import { Button } from '@shared/ui/button'
import Flex from '@shared/ui/flex'
import Subtext from '@shared/ui/subtext'
import React from 'react'
import { FiBriefcase, FiList } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useModal } from 'widgets'

const DivisionModalStyled = styled.div`
    display: flex;
    flex-direction: column;
    height: 300px;

    @media (min-width: 1001px) {
        min-width: 300px;
        width: 300px;
        height: 300px;
    }
`

const LinkStyled = styled(Link)`
    width: 100%;
`

type Props = {
    division: string
}

const DivisionModal = ({ division }: Props) => {
    const { close } = useModal()

    return (
        <DivisionModalStyled>
            <Flex d="column" gap="12px" jc="center" h="100%">
                <Icon size={120} color="purple">
                    <FiBriefcase />
                </Icon>
                <Subtext fontSize="1.2rem" align="center">
                    {division}
                </Subtext>
            </Flex>
            <LinkStyled to={`${ALL_TEACHERS_ROUTE}/${division}`} onClick={close}>
                <Button icon={<FiList />} width="100%" text="Список" />
            </LinkStyled>
        </DivisionModalStyled>
    )
}

export default DivisionModal
