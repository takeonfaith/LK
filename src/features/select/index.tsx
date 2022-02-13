import useOnClickOutside from '@utils/hooks/use-on-click-outside'
import React, { memo, useCallback, useRef, useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { SelectArrow, SelectHeader, SelectHeaderWrapper, SelectItem, SelectItems, SelectWrapper } from './ui/atoms'

export interface SelectPage {
    id: string | number
    icon?: React.ReactNode
    title: string
    children?: SelectPage[]
}

interface Props {
    items: SelectPage[]
    setSelected: React.Dispatch<React.SetStateAction<SelectPage>>
    selected: SelectPage
    isActive?: boolean
    title?: string
}

const findCurrentPage = (pages: SelectPage[], path: string[]): SelectPage[] | undefined => {
    const page = pages.find((page) => page.id.toString() === path[0])

    if (path.length && page?.children) {
        path.shift()
        return findCurrentPage(page.children, path)
    } else return page ? page.children : pages
}

const Select = ({ items, setSelected, selected, title, isActive = true }: Props) => {
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
                setSelected(page)
                handleOpen()
                setSelectedRoute(route.join('/'))
                // setRoute([])
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

    return (
        <SelectWrapper onClick={handleOpen} ref={refElement} isOpen={isOpen} isActive={isActive}>
            <SelectHeaderWrapper>
                <SelectHeader>
                    {!!selected.icon && <span className="icon">{selected.icon}</span>}
                    <span className="header-title">{selected.title}</span>
                </SelectHeader>
                <SelectArrow isOpen={isOpen} />
            </SelectHeaderWrapper>
            <SelectItems
                ref={refItems}
                isOpen={isOpen}
                className={isOpen ? 'open' : 'close'}
                itemsAmount={currentItems.length + (!!route.length ? 1 : 0)}
            >
                {!!route.length && (
                    <SelectItem
                        key={-1}
                        isSelected={false}
                        onClick={(e) => {
                            e.stopPropagation()
                            goBack()
                        }}
                    >
                        <span className="back-button">
                            <FiChevronLeft />
                            Назад
                        </span>
                    </SelectItem>
                )}
                {currentItems.map(({ id, icon, title, children }, i) => (
                    <SelectItem
                        key={title}
                        onClick={(e) => {
                            e.stopPropagation()
                            handleSelect({ id, icon, title, children })
                        }}
                        isSelected={selected.title.includes(title)}
                        leadingToSelected={selectedRoute.includes(id.toString())}
                    >
                        {!!icon && <span className="icon">{icon}</span>}
                        <span className="select-item-title">{title}</span>
                        {!!children && (
                            <span className="right-icon">
                                <FiChevronRight />
                            </span>
                        )}
                    </SelectItem>
                ))}
            </SelectItems>
        </SelectWrapper>
    )
}

export default memo(Select)
