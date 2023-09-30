/* eslint-disable no-console */
import getUsersOS from '@shared/lib/get-users-os'
import useShortCutKeys from '@shared/lib/hooks/use-short-cut-keys'
import BlockWrapper from '@shared/ui/block/styles'
import { Button } from '@shared/ui/button'
import Flex from '@shared/ui/flex'
import Subtext from '@shared/ui/subtext'
import React from 'react'
import { FiCommand, FiSearch } from 'react-icons/fi'
import styled from 'styled-components'
import { useModal } from 'widgets'
import GlobalAppSearchModal from './global-app-search-modal'

type SearchSize = 'icon' | 'small' | 'large'

const GlobalAppSearchStyled = styled(BlockWrapper)<{ size: SearchSize }>`
    cursor: pointer;
    box-shadow: ${({ size }) => size === 'small' && 'var(--block-shadow-1)'};
    &:hover {
        filter: brightness(0.96);
    }
`

const Key = styled.div`
    background-color: var(--theme-1);
    width: 23px;
    height: 23px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.73rem;
    font-weight: 500;
    width: fit-content;
    padding: 4px 6px;
    border-radius: 4px;
    color: var(--theme-mild-opposite);
`

const Shortcuts = styled(Flex)`
    @media (max-width: 1000px) {
        display: none;
    }
`

const getShortCut = () => {
    const os = getUsersOS()

    const shortcuts = {
        Windows: [{ title: 'CTRL', key: 'Control' }, { key: 'k' }],
        Linux: [{ title: 'CTRL', key: 'Control' }, { key: 'k' }],
        UNIX: [{ title: 'CTRL', key: 'Control' }, { key: 'k' }],
        MacOS: [{ title: 'CMD', key: 'Meta', icon: <FiCommand /> }, { key: 'k' }],
    } as Record<typeof os, { title?: string; key: string; icon?: React.ReactNode }[]>

    return shortcuts[os]
}

type Props = {
    size?: SearchSize
}

const GlobalAppSearch = ({ size = 'large' }: Props) => {
    const shortCut = getShortCut()
    const { open } = useModal()
    const padding = size === 'large' ? '16px' : '8px'
    const width = size === 'large' ? '100%' : '92%'

    const handleOpenModal = () => open(<GlobalAppSearchModal />, 'Глобальный поиск')

    useShortCutKeys(
        shortCut.map(({ key }) => key),
        handleOpenModal,
    )

    if (size === 'icon') {
        return (
            <Button
                direction="vertical"
                icon={<FiSearch />}
                width="40px"
                minWidth="40px"
                shrinkTextInMobile
                background="transparent"
                onClick={handleOpenModal}
            />
        )
    }

    return (
        <GlobalAppSearchStyled
            tabIndex={10}
            maxWidth="750px"
            width={width}
            size={size}
            height="fit-content"
            padding={padding}
            justifyContent="space-between"
            onClick={handleOpenModal}
        >
            <Subtext align="left" fontSize="0.9rem">
                <Flex gap="8px">
                    <FiSearch />
                    Поиск
                </Flex>
            </Subtext>
            <Shortcuts w="fit-content" gap="4px">
                {shortCut.map((k) => (
                    <Key key={k.key}>{k?.icon ?? (k.title ?? k.key).toUpperCase()}</Key>
                ))}
            </Shortcuts>
        </GlobalAppSearchStyled>
    )
}

export default GlobalAppSearch
