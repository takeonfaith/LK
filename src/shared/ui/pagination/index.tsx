import { Input, Button } from '@ui/atoms'
import ButtonsList from '@ui/molecules/buttons-list'
import { Align } from '@ui/types'
import limitNumber from '@utils/limit-number'
import React, { useEffect, useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

interface Props {
    align?: Align
    pages: number
    condition: boolean
    currentPage: number
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

const Pagination = ({ pages, condition, currentPage, setCurrentPage, align = 'center' }: Props) => {
    const [currentPageValue, setCurrentPageValue] = useState<string>(currentPage.toString())

    useEffect(() => {
        if (currentPageValue.length) {
            setCurrentPage(+currentPageValue)
        }
    }, [currentPageValue])

    return (
        <ButtonsList align={align} condition={condition} direction={'horizontal'} width="100%" padding="10px">
            <Button
                background="var(--mild-theme)"
                icon={<FiChevronLeft />}
                onClick={() => setCurrentPageValue(limitNumber(currentPage - 1, pages).toString())}
            />
            <div className="page-indicator">
                <Input
                    width="12px"
                    placeholder=""
                    value={!!currentPageValue.length ? (+currentPageValue + 1).toString() : ''}
                    setValue={(value: string) => {
                        if (!!value.length) {
                            if (+value >= 1 && +value <= pages + 1) setCurrentPageValue((+value - 1).toString())
                        } else setCurrentPageValue('')
                    }}
                    inputAppearance={false}
                />
                / {pages + 1}
            </div>
            <Button
                background="var(--mild-theme)"
                icon={<FiChevronRight />}
                onClick={() => setCurrentPageValue(limitNumber(currentPage + 1, pages).toString())}
            />
        </ButtonsList>
    )
}

export default Pagination
