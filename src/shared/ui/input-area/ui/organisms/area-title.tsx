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
`

interface Props {
    title: string
    included: boolean
    optional: boolean
    confirmed: boolean
    setOpenArea: React.Dispatch<React.SetStateAction<boolean>>
    setIncluded: React.Dispatch<React.SetStateAction<boolean>>
}

const AreaTitle = ({ title, included, optional, confirmed, setOpenArea, setIncluded }: Props) => {
    return (
        <AreaTitleWrapper onClick={() => (included || !optional) && setOpenArea((prev) => !prev)}>
            <div className="title-and-icon">
                <Title
                    size={4}
                    align="left"
                    icon={confirmed ? <HiOutlineCheckCircle /> : <HiOutlineExclamationCircle />}
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
