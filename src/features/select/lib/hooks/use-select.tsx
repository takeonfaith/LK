import { SelectPage } from '@features/select'
import useOnClickOutside from '@utils/hooks/use-on-click-outside'
import React, { useCallback, useRef, useState } from 'react'
import findCurrentPage from '../find-current-page'

type SingleSelect = React.Dispatch<React.SetStateAction<SelectPage | null>>
type MultipleSelect = React.Dispatch<React.SetStateAction<SelectPage[] | null>>

export interface SelectProps {
    items: SelectPage[]
    setSelected: SingleSelect | MultipleSelect
    selected: SelectPage | SelectPage[] | null
    isActive?: boolean
    title?: string
    width?: string
    multiple?: boolean
    required?: boolean
    placeholder?: string
}

const useSelect = (props: SelectProps) => {
    const { items, setSelected, selected, multiple = false } = props
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const refElement = useRef<HTMLDivElement | null>(null)
    const refItems = useRef<HTMLUListElement | null>(null)
    const [route, setRoute] = useState<string[]>([])
    const [currentItems, setCurrentItems] = useState<SelectPage[]>(items)
    const [selectedRoute, setSelectedRoute] = useState<string>('')

    const handleOpen = useCallback(() => {
        setIsOpen((prev) => !prev)
    }, [setIsOpen])

    const handleSelect = useCallback(
        (page: SelectPage) => {
            if (!page.children) {
                if (multiple) {
                    if (!!selected) {
                        if (!!(selected as SelectPage[]).find((p) => p.id === page.id)) {
                            const newSelected = (selected as SelectPage[]).filter((p) => p.id !== page.id)
                            !newSelected.length
                                ? (setSelected as MultipleSelect)(null)
                                : (setSelected as MultipleSelect)(newSelected)
                        } else {
                            ;(setSelected as MultipleSelect)([...(selected as SelectPage[]), page])
                        }
                    } else {
                        ;(setSelected as MultipleSelect)([page])
                    }
                } else {
                    ;(setSelected as SingleSelect)(page)
                }

                !multiple && handleOpen()
                setSelectedRoute(route.join('/'))
            } else {
                route.push(page.id.toString())
                setCurrentItems(findCurrentPage(items, [...route]) ?? [])

                setRoute([...route])
            }
        },
        [setSelected, route],
    )

    const goBack = useCallback(() => {
        route.pop()
        setRoute([...route])
        if (route.length === 0) {
            setCurrentItems(items)
        } else {
            setCurrentItems(findCurrentPage(items, route) ?? [])
        }
    }, [route, setCurrentItems])

    useOnClickOutside(refElement, () => {
        if (isOpen) {
            handleOpen()
        }
    })

    return {
        handleOpen,
        refElement,
        isOpen,
        multiple,
        handleSelect,
        selectedRoute,
        currentItems,
        route,
        goBack,
        refItems,
    }
}

export default useSelect
