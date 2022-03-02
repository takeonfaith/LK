import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const FilterGridWrapper = styled.div<{ height: number }>`
    display: flex;
    overflow: hidden;
    width: 100%;
    height: ${({ height }) => height + 'px'};
    /* transition: 0.4s; */
    position: relative;
`

interface Props {
    gridLength?: number
    gap?: number
    children: React.ReactElement[]
    filterCondition: (el: any) => boolean
}

const GridItem = styled.div<{
    index: number
    gridLength: number
    gap: number
    filtered: boolean
    elHeight: number
}>`
    transition: 0.5s;
    position: ${({ filtered }) => (filtered ? 'absolute' : 'fixed')};
    transform: ${({ index, gridLength, gap, filtered, elHeight }) =>
        `translate(calc(${index % gridLength} * 100% + ${(index % gridLength) * gap}px), calc(${elHeight}px + ${
            Math.floor(index / gridLength) * gap
        }px)) scale(${filtered ? 1 : 0.95})`};
    opacity: ${({ filtered }) => (filtered ? 1 : 0)};
    visibility: ${({ filtered }) => (filtered ? 'visible' : 'hidden')};
`

const FilterGrid = ({ gridLength = 5, gap = 5, children, filterCondition }: Props) => {
    let lastFiltered = -1
    const gridRef = useRef<HTMLDivElement>(null)
    const [height, setHeight] = useState(0)
    const [elementsHeights, setElementsHeights] = useState<number[]>([])

    const findHeight = (
        refChildren: HTMLCollection | undefined,
        boundary: number,
        realChildren: React.ReactElement[],
    ) => {
        let sum = 0
        if (refChildren) {
            for (let index = 0; index < boundary; index++) {
                const element = refChildren[index]

                sum += filterCondition(Object.values(realChildren[index]?.props)[0]) ? element.clientHeight : 0
            }
        }

        return sum
    }

    useEffect(() => {
        setHeight(findHeight(gridRef.current?.children, gridRef.current?.children.length ?? 0, children))
        setElementsHeights(children?.map((el, i) => findHeight(gridRef.current?.children, i, children) ?? 0))
    }, [gridRef.current, children])

    return (
        <FilterGridWrapper ref={gridRef} height={height}>
            {children?.map((el, i) => {
                if (filterCondition(Object.values(el?.props)[0])) lastFiltered++

                return (
                    <GridItem
                        index={filterCondition(Object.values(el?.props)[0]) ? lastFiltered : i}
                        gridLength={gridLength}
                        gap={gap}
                        key={i}
                        filtered={filterCondition(Object.values(el?.props)[0])}
                        elHeight={elementsHeights[i]}
                    >
                        {el}
                    </GridItem>
                )
            })}
        </FilterGridWrapper>
    )
}

export default FilterGrid
