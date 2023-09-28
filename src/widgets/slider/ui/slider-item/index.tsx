import React, { memo } from 'react'
import { SliderItemWrapper } from './styles'
import { Size } from '@shared/ui/types'

interface Props {
    id: number
    currentPage: number
    setCurrentPage: (page: number) => void
    pageTitle: string
    elementsVisible: number
    condition?: boolean
    size: Size
}

const SliderItem = ({ id, currentPage, setCurrentPage, pageTitle, elementsVisible, condition = true, size }: Props) => {
    return (
        <SliderItemWrapper
            size={size}
            className={`SliderItem ${id === currentPage ? 'active' : ''}`}
            onClick={() => condition && setCurrentPage(id)}
            elementsVisible={elementsVisible}
            condition={condition}
        >
            <b>{pageTitle}</b>
        </SliderItemWrapper>
    )
}

export default memo(SliderItem)
