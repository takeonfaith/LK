import Flex from '@shared/ui/flex'
import Subtext from '@shared/ui/subtext'
import React from 'react'
import { FiChevronRight, FiUsers } from 'react-icons/fi'
import styled from 'styled-components'
import { useModal } from 'widgets'
import GroupModal from './group-modal'

const GroupItemStyled = styled.div`
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
    group: string
}

const GroupItem = ({ group }: Props) => {
    const { open } = useModal()

    const handleOpenModal = () => {
        open(<GroupModal group={group} />, `Группа`)
    }

    return (
        <GroupItemStyled onClick={handleOpenModal}>
            <Flex gap="8px" h="50px" jc="space-between" w="100%">
                <Flex gap="8px" h="50px">
                    <FiUsers />
                    <Subtext fontSize="1rem">{group}</Subtext>
                </Flex>
                <FiChevronRight />
            </Flex>
        </GroupItemStyled>
    )
}

export default GroupItem
