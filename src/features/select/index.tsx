import React, { useCallback, useState } from 'react'
import { SelectWrapper } from './ui/atoms'

interface Props {
    items: { [id: number]: string }
    setSelected: (id: number) => void
    selected: number
}
const Select = ({ items, setSelected, selected }: Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleOpen = useCallback(() => {
        setIsOpen((prev) => !prev)
    }, [setIsOpen])

    return <SelectWrapper onClick={handleOpen}>{isOpen}</SelectWrapper>
}

export default Select
