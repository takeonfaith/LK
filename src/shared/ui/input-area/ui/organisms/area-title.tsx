import { Button, Title } from '@ui/atoms'
import Checkbox from '@ui/atoms/checkbox'
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
    background: var(--schedule);
    z-index: 3;
    width: 100%;

    .title-and-icon {
        display: flex;
        align-items: center;
    }

    @media (max-width: 1000px) {
        background: transparent;
    }
`

interface Props {
    title: string
    included: boolean
    optional: boolean
    confirmed?: boolean
    setOpenArea: React.Dispatch<React.SetStateAction<boolean>>
    setIncluded: React.Dispatch<React.SetStateAction<boolean>>
    collapsed?: boolean
}

const AreaTitle = ({ title, included, optional, confirmed, setOpenArea, setIncluded, collapsed }: Props) => {
    return (
        <AreaTitleWrapper onClick={() => !collapsed && (included || !optional) && setOpenArea((prev) => !prev)}>
            <div className="title-and-icon">
                <Title
                    size={4}
                    align="left"
                    icon={
                        confirmed !== undefined ? (
                            confirmed ? (
                                <HiOutlineCheckCircle />
                            ) : (
                                <HiOutlineExclamationCircle />
                            )
                        ) : undefined
                    }
                    iconColor={confirmed ? 'var(--green)' : 'var(--red)'}
                >
                    {title}
                </Title>
                {optional && <Checkbox checked={included} setChecked={setIncluded} />}
            </div>
            <Button icon={<HiChevronDown />} onClick={() => null} background="transparent" />
        </AreaTitleWrapper>
    )
}

export default AreaTitle
