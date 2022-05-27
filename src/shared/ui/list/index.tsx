import { Colors } from '@consts'
import { Button } from '@ui/button'
import { DotPages } from '@ui/molecules'
import { Title } from '@ui/title'
import { Align, Direction, VerticalAlign } from '@ui/types'
import limitNumber from '@utils/limit-number'
import React, { useEffect, useRef, useState } from 'react'
import { FiChevronLeft, FiChevronRight, FiPlus } from 'react-icons/fi'
import styled from 'styled-components'

export type ModifiedAlign = Align | 'evenly'
export type ModifiedVerticalAlign = VerticalAlign | 'evenly'

interface StyleProps {
    direction?: Direction
    width?: string
    height?: string
    gap?: number
    horizontalAlign?: ModifiedAlign
    verticalAlign?: ModifiedVerticalAlign
    padding?: string
    innerPadding?: string
    fontSize?: string
    scroll?: boolean
    wrap?: boolean
    wrapOnMobile?: boolean
}

const convertAlign = (align?: ModifiedAlign) => {
    switch (align) {
        case 'center':
            return 'center'
        case 'right':
            return 'flex-end'
        case 'evenly':
            return 'space-evenly'
    }
    return 'flex-start'
}

const convertVerticalAlign = (align?: ModifiedVerticalAlign) => {
    switch (align) {
        case 'center':
            return 'center'
        case 'bottom':
            return 'flex-end'
        case 'evenly':
            return 'space-evenly'
    }
    return 'flex-start'
}

const Wrapper = styled.div<{ padding?: string }>`
    padding: ${({ padding }) => padding ?? '0'};
    position: relative;
    .left-button,
    .right-button {
        position: absolute;
        top: 50%;
        z-index: 5;
        transform: translateY(-50%);
    }

    .left-button {
        left: 0;
    }

    .right-button {
        right: 0;
    }
`

export const ListWrapper = styled.div<StyleProps>`
    display: flex;
    height: ${({ height }) => height ?? 'fit-content'};
    flex-direction: ${({ direction }) => (direction ?? 'vertical') === 'vertical' && 'column'};
    align-items: center;
    justify-content: ${({ direction, horizontalAlign, verticalAlign }) =>
        (direction ?? 'vertical') === 'vertical' ? convertVerticalAlign(verticalAlign) : convertAlign(horizontalAlign)};
    align-items: ${({ direction, horizontalAlign, verticalAlign }) =>
        (direction ?? 'vertical') === 'vertical' ? convertAlign(horizontalAlign) : convertVerticalAlign(verticalAlign)};
    gap: ${({ gap }) => (gap ?? 5) + 'px'};
    width: ${({ width }) => width ?? '100%'};
    min-width: ${({ width }) => width ?? '100%'};
    color: var(--text);
    font-size: ${({ fontSize }) => fontSize ?? '1em'};
    overflow-x: ${({ scroll }) => scroll && 'auto'};
    flex-wrap: ${({ wrap }) => wrap && 'wrap'};
    padding: ${({ innerPadding }) => innerPadding ?? '0'};
    scroll-behavior: smooth;

    ::-webkit-scrollbar {
        display: none;
    }

    @media (max-width: 1000px) {
        flex-wrap: ${({ wrapOnMobile }) => (wrapOnMobile ? 'wrap' : 'nowrap')};
    }
`

type Props = StyleProps & {
    title?: string
    children: ChildrenType
    onAdd?: () => void
    visible?: boolean
    showPages?: boolean
}

const List = (props: Props) => {
    const {
        title,
        children,
        gap,
        width,
        height,
        padding,
        fontSize,
        wrap,
        onAdd,
        showPages,
        innerPadding,
        wrapOnMobile,
        direction = 'vertical',
        verticalAlign = 'top',
        horizontalAlign = 'left',
        scroll = true,
        visible = true,
    } = props

    if (!visible) return null

    const listRef = useRef<HTMLDivElement | null>(null)
    const [leftArrow, setLeftArrow] = useState<boolean>(false)
    const [rightArrow, setRightArrow] = useState<boolean>(false)
    const [scrollLeft, setScrollLeft] = useState(0)
    const [currentPage, setCurrentPage] = useState(0)
    const pageOffset = listRef.current?.clientWidth ?? 1
    const amountOfPages = Math.ceil((listRef.current?.scrollWidth ?? 0) / (pageOffset + (gap ?? 0)))

    // console.log(amountOfPages)

    useEffect(() => {
        // console.log(listRef.current?.scrollLeft)
        if (listRef.current) {
            listRef.current.scrollLeft = scrollLeft

            if (listRef.current.offsetWidth < listRef.current.scrollWidth) {
                if (scrollLeft !== 0) {
                    setLeftArrow(true)
                } else {
                    setLeftArrow(false)
                }

                if (Math.ceil(scrollLeft + listRef.current.offsetWidth) < listRef.current.scrollWidth) {
                    setRightArrow(true)
                } else {
                    setRightArrow(false)
                }
            }
        }
    }, [scrollLeft, listRef.current?.scrollLeft])

    return (
        <Wrapper padding={padding}>
            <Title size={4} align="left" bottomGap visible={!!title} width="calc(fit-content + 50px)">
                {title}
                {onAdd && (
                    <Button
                        icon={<FiPlus />}
                        width="35px"
                        height="15px"
                        background={Colors.grey.transparentAF}
                        textColor="var(--reallyBlue)"
                        onClick={onAdd}
                    />
                )}
            </Title>
            {leftArrow && (
                <Button
                    background="var(--theme)"
                    width="25px"
                    height="25px"
                    icon={<FiChevronLeft />}
                    className="left-button"
                    textColor={Colors.grey.main}
                    onClick={() => {
                        setCurrentPage((prev) => limitNumber(prev - 1, amountOfPages))
                        setScrollLeft((prev) => prev - pageOffset - (gap ?? 0))
                    }}
                />
            )}
            {rightArrow && (
                <Button
                    background="var(--theme)"
                    width="25px"
                    height="25px"
                    icon={<FiChevronRight />}
                    className="right-button"
                    textColor={Colors.grey.main}
                    onClick={() => {
                        setCurrentPage((prev) => limitNumber(prev + 1, amountOfPages))
                        setScrollLeft((prev) => {
                            return prev + pageOffset + (gap ?? 0)
                        })
                    }}
                />
            )}
            <ListWrapper
                verticalAlign={verticalAlign}
                horizontalAlign={horizontalAlign}
                direction={direction}
                ref={listRef}
                gap={gap}
                width={width}
                height={height}
                fontSize={fontSize}
                wrap={wrap}
                innerPadding={innerPadding}
                scroll={scroll}
                wrapOnMobile={wrapOnMobile}
            >
                {children}
            </ListWrapper>
            {showPages && <DotPages direction="horizontal" current={currentPage} amount={amountOfPages} />}
        </Wrapper>
    )
}

export default React.memo(List)
