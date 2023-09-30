import { Button, Input } from '@ui/atoms'
import { Align } from '@ui/types'
import limitNumber from '@utils/limit-number'
import React, { useEffect, useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import Flex from '../flex'
import Subtext from '../subtext'

interface Props {
    align?: Align
    pages: number
    condition: boolean
    currentPage: number
    setCurrentPage: (value: number) => void
}

const Pagination = ({ pages, condition, currentPage, setCurrentPage, align = 'center' }: Props) => {
    const [currentPageValue, setCurrentPageValue] = useState<string>(currentPage.toString())
    useEffect(() => {
        if (currentPageValue.length) {
            setCurrentPage(+currentPageValue)
        }
    }, [currentPageValue])

    useEffect(() => {
        setCurrentPageValue(currentPage.toString())
    }, [currentPage])

    const handleValue = (value: string) => {
        if (!!value.length) {
            if (+value >= 1 && +value <= pages + 1) setCurrentPageValue((+value - 1).toString())
        } else setCurrentPageValue('')
    }

    if (!condition) return null

    return (
        <Flex gap="10px" jc={align === 'left' ? 'flex-start' : align === 'right' ? 'flex-end' : align}>
            <Button
                minWidth="42px"
                height="42px"
                background="var(--theme)"
                icon={<FiChevronLeft />}
                onClick={() => setCurrentPageValue(limitNumber(currentPage - 1, pages).toString())}
            />
            <Flex w="fit-content" gap="6px">
                <Input
                    width="12px"
                    placeholder=""
                    value={!!currentPageValue.length ? (+currentPageValue + 1).toString() : ''}
                    setValue={handleValue}
                    inputAppearance={false}
                />
                /{' '}
                <Subtext width="fit-content" fontSize="0.85rem">
                    {pages + 1}
                </Subtext>
            </Flex>
            <Button
                minWidth="42px"
                height="42px"
                background="var(--theme)"
                icon={<FiChevronRight />}
                onClick={() => setCurrentPageValue(limitNumber(currentPage + 1, pages).toString())}
            />
        </Flex>
    )
}

export default Pagination
