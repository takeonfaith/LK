import React, { FC } from 'react'

interface ISliderItem {
    id: number
    currentPage: number
    setCurrentPage: (page: number) => void
    pageTitle: string
}

const SliderItem: FC<ISliderItem> = ({ id, currentPage, setCurrentPage, pageTitle }) => {
    return (
        <div className={`SliderItem ${id === currentPage ? 'active' : ''}`} onClick={() => setCurrentPage(id)}>
            <b>{pageTitle}</b>
        </div>
    )
}

export default SliderItem
