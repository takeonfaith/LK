import useOnClickOutside from '@utils/hooks/use-on-click-outside'
import React, { memo, useCallback, useRef, useState } from 'react'
import { SelectWrapper, SelectHeader, SelectItems, SelectItem, SelectHeaderWrapper, SelectArrow } from './ui/atoms'

interface Props {
    items: { [id: number]: string }
    setSelected: (id: number) => void
    selected: number
}

const Select = ({ items, setSelected, selected }: Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const refElement = useRef<HTMLDivElement | null>(null)
    const refItems = useRef<HTMLUListElement | null>(null)

    const handleOpen = useCallback(() => {
        setIsOpen((prev) => !prev)
    }, [setIsOpen])

    const handleSelect = useCallback(
        (id: number) => {
            setSelected(id)
        },
        [setSelected],
    )

    useOnClickOutside(refElement, () => {
        if (isOpen) {
            handleOpen()
        }
    })

    return (
        <SelectWrapper onClick={handleOpen} ref={refElement}>
            <SelectHeaderWrapper>
                <SelectHeader>{items[selected]}</SelectHeader>
                <SelectArrow isOpen={isOpen} />
            </SelectHeaderWrapper>
            <SelectItems ref={refItems} isOpen={isOpen} className={isOpen ? 'open' : 'close'}>
                {Object.entries(items).map(([id, value], i) => (
                    <SelectItem key={i} onClick={() => handleSelect(+id)} isSelected={+id === selected}>
                        {value}
                    </SelectItem>
                ))}
            </SelectItems>
        </SelectWrapper>
    )
}

export default memo(Select)
