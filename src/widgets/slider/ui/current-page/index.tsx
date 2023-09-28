import React, { memo, useMemo } from 'react'
import { CurrentPageWrapper } from './styles'
import { Size } from '@shared/ui/types'

interface Props {
    pages: { title: string; condition?: boolean }[]
    currentPage: number
    elementsVisible: number
    appearance?: boolean
    size: Size
}

const CurrentPage = ({ currentPage, pages, elementsVisible, appearance, size }: Props) => {
    const moreThanNeeded = useMemo(() => pages.length > elementsVisible, [pages.length, elementsVisible])

    return (
        <CurrentPageWrapper
            currentPage={currentPage}
            appearance={appearance}
            moreThanNeeded={moreThanNeeded}
            pages={pages}
            elementsVisible={elementsVisible}
            size={size}
        />
    )
}

export default memo(CurrentPage)
