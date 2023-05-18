import { Button } from '@ui/atoms'
import React from 'react'
import { HiChevronDown, HiOutlineCheckCircle, HiOutlineExclamationCircle } from 'react-icons/hi'
import styled from 'styled-components'

interface Props {
    title: string
    confirmed: boolean
    setOpenArea: React.Dispatch<React.SetStateAction<boolean>>
}

export const AccordionTitle = ({ title, confirmed, setOpenArea }: Props) => {
    return (
        <AreaTitleWrapper onClick={() => setOpenArea((prev) => !prev)}>
            <TitleAndIcon>
                {confirmed ? (
                    <HiOutlineCheckCircle style={{ color: 'var(--green)' }} />
                ) : (
                    <HiOutlineExclamationCircle style={{ color: 'var(--red)' }} />
                )}
                <b>{title}</b>
            </TitleAndIcon>
            <Button icon={<HiChevronDown />} onClick={() => null} background="transparent" />
        </AreaTitleWrapper>
    )
}

const AreaTitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    user-select: none;
    cursor: pointer;
    position: sticky;
    top: -2px;
    background: var(--form);
    z-index: 3;
    width: 100%;
    padding: 0 10px;
`

const TitleAndIcon = styled.div`
    display: flex;
    align-items: center;
    width: calc(100% - 30px);

    b {
        overflow: hidden;
        width: 100%;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    svg {
        min-width: 16px;
        margin-right: 7px;
    }
`
