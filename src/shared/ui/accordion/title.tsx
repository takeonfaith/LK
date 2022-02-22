import { Button, Title } from '@ui/atoms'
import React from 'react'
import { HiChevronDown, HiOutlineCheckCircle, HiOutlineExclamationCircle } from 'react-icons/hi'
import styled from 'styled-components'

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

    .title-and-icon {
        display: flex;
        align-items: center;
    }
`

interface Props {
    title: string
    confirmed: boolean
    setOpenArea: React.Dispatch<React.SetStateAction<boolean>>
}

const AccordionTitle = ({ title, confirmed, setOpenArea }: Props) => {
    return (
        <AreaTitleWrapper onClick={() => setOpenArea((prev) => !prev)}>
            <div className="title-and-icon">
                <Title
                    size={4}
                    align="left"
                    icon={confirmed ? <HiOutlineCheckCircle /> : <HiOutlineExclamationCircle />}
                    iconColor={confirmed ? 'var(--green)' : 'var(--red)'}
                >
                    {title}
                </Title>
            </div>
            <Button icon={<HiChevronDown />} onClick={() => null} background="transparent" />
        </AreaTitleWrapper>
    )
}

export default AccordionTitle
