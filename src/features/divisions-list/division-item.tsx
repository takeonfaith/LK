import Flex from '@shared/ui/flex'
import Subtext from '@shared/ui/subtext'
import React from 'react'
import { FiBriefcase, FiChevronRight } from 'react-icons/fi'
import styled from 'styled-components'
import { useModal } from 'widgets'
import DivisionModal from './division-modal'

const DivisionItemStyled = styled.div`
    width: 100%;
    color: var(--text);
    padding: 0px 16px;
    background: var(--theme-mild-xxl);
    border-radius: var(--brLight);
    cursor: pointer;

    svg {
        min-width: 30px;
    }

    &:hover {
        background: var(--search);
    }
`

type Props = {
    division: string
}

const DivisionItem = ({ division }: Props) => {
    const { open } = useModal()

    const handleOpenModal = () => {
        open(<DivisionModal division={division} />, `Подразделение`)
    }
    return (
        <DivisionItemStyled onClick={handleOpenModal}>
            <Flex gap="8px" h="50px" jc="space-between" w="100%">
                <Flex gap="8px">
                    <FiBriefcase />
                    <Subtext fontSize="1rem">{division}</Subtext>
                </Flex>
                <FiChevronRight />
            </Flex>
        </DivisionItemStyled>
    )
}

export default DivisionItem
