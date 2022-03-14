import useOnClickOutside from '@utils/hooks/use-on-click-outside'
import React, { memo, useCallback, useRef, useState } from 'react'
import { FiCheck, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { SelectArrow, SelectHeader, SelectHeaderWrapper, SelectItem, SelectItems, SelectWrapper } from './ui/atoms'

export interface SelectPage {
    id: string | number
    icon?: React.ReactNode
    title: string
    children?: SelectPage[]
}

type SingleSelect = React.Dispatch<React.SetStateAction<SelectPage>>
type MultipleSelect = React.Dispatch<React.SetStateAction<SelectPage[] | null>>

interface Props {
    items: SelectPage[]
    setSelected: SingleSelect | MultipleSelect
    selected: SelectPage | SelectPage[] | null
    isActive?: boolean
    title?: string
    width?: string
    multiple?: boolean
    required?: boolean
}

const findCurrentPage = (pages: SelectPage[], path: string[]): SelectPage[] | undefined => {
    const page = pages.find((page) => page.id.toString() === path[0])

    if (path.length && page?.children) {
        path.shift()
        return findCurrentPage(page.children, path)
    } else return page ? page.children : pages
}

const Select = (props: Props) => {
    const { items, setSelected, selected, title, width, required, multiple = false, isActive = true } = props
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

    return (
        <SelectWrapper onClick={handleOpen} ref={refElement} isOpen={isOpen} isActive={isActive} width={width}>
            {!!title && (
                <h5>
                    {required && <span className="red-star">*</span>}
                    {title}
                </h5>
            )}
            <SelectHeaderWrapper multiple={multiple}>
                <SelectHeader>
                    {!multiple ? (
                        <div className="single-header">
                            {!!selected ? (
                                <>
                                    {!!(selected as SelectPage).icon && (
                                        <span className="icon">{(selected as SelectPage).icon}</span>
                                    )}
                                    <span className="header-title">{(selected as SelectPage).title}</span>
                                </>
                            ) : (
                                <span className="not-chosen">Не выбрано</span>
                            )}
                        </div>
                    ) : !!selected ? (
                        (selected as SelectPage[]).map((page) => {
                            return (
                                <div className="header-item" key={page.id}>
                                    {!!page.icon && <span className="icon">{page.icon}</span>}
                                    <span className="header-title">{page.title}</span>
                                </div>
                            )
                        })
                    ) : (
                        <span className="not-chosen multi">Не выбрано</span>
                    )}
                </SelectHeader>
                <SelectArrow isOpen={isOpen} />
            </SelectHeaderWrapper>
            <SelectItems
                width={width}
                ref={refItems}
                isOpen={isOpen}
                className={isOpen ? 'open' : 'close'}
                itemsAmount={currentItems.length + (!!route.length ? 1 : 0)}
                title={title}
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
                        isSelected={!multiple && !!selected && (selected as SelectPage).title.includes(title)}
                        leadingToSelected={selectedRoute.includes(id.toString())}
                    >
                        {!!icon && <span className="icon">{icon}</span>}
                        <span className="select-item-title">{title}</span>
                        {!!children && (
                            <span className="right-icon">
                                <FiChevronRight />
                            </span>
                        )}
                        {multiple &&
                            !!selected &&
                            !!(selected as SelectPage[]).find((page) => page.title.includes(title)) && (
                                <span className="right-icon">
                                    <FiCheck />
                                </span>
                            )}
                    </SelectItem>
                ))}
            </SelectItems>
        </SelectWrapper>
    )
}

export default memo(Select)
