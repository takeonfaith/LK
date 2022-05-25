import { Colors } from '@consts'
import { Button } from '@ui/button'
import { Title } from '@ui/title'
import { Direction } from '@ui/types'
import React, { useEffect, useRef, useState } from 'react'
import { FiChevronLeft, FiChevronRight, FiPlus } from 'react-icons/fi'
import styled from 'styled-components'

interface StyleProps {
    direction?: Direction
    width?: string
    gap?: string
    justifyContent?: string
    alignItems?: string
    padding?: string
    fontSize?: string
    scroll?: boolean
    wrap?: boolean
}

const Wrapper = styled.div<{ padding?: string }>`
    padding: ${({ padding }) => padding ?? '0'};
    position: relative;
    .left-button,
    .right-button {
        position: absolute;
        top: calc(50% + 10px);
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
    flex-direction: ${({ direction }) => (direction ?? 'vertical') === 'vertical' && 'column'};
    align-items: center;
    justify-content: ${({ justifyContent }) => justifyContent ?? 'flex-start'};
    align-items: ${({ alignItems }) => alignItems ?? 'center'};
    gap: ${({ gap }) => gap ?? '5px'};
    width: ${({ width }) => width ?? '100%'};
    min-width: ${({ width }) => width ?? '100%'};
    color: var(--text);
    font-size: ${({ fontSize }) => fontSize ?? '1em'};
    overflow-x: ${({ scroll }) => scroll && 'auto'};
    flex-wrap: ${({ wrap }) => wrap && 'wrap'};
    /* scroll-behavior: smooth; */

    ::-webkit-scrollbar {
        display: none;
    }
`

type Props = StyleProps & {
    title?: string
    children: ChildrenType
    onAdd?: () => void
    visible?: boolean
}

const List = (props: Props) => {
    const {
        title,
        children,
        direction,
        gap,
        width,
        padding,
        justifyContent,
        alignItems,
        fontSize,
        wrap,
        onAdd,
        scroll = true,
        visible = true,
    } = props

    if (!visible) return null

    const listRef = useRef<HTMLDivElement | null>(null)
    const [leftArrow, setLeftArrow] = useState<boolean>(false)
    const [rightArrow, setRightArrow] = useState<boolean>(false)
    const [scrollLeft, setScrollLeft] = useState(0)

    useEffect(() => {
        // console.log(listRef.current?.scrollLeft)
        if (listRef.current) {
            listRef.current.scrollLeft = scrollLeft

            if (listRef.current.offsetWidth < listRef.current.scrollWidth) {
                if (listRef.current.scrollLeft !== 0) {
                    setLeftArrow(true)
                } else {
                    setLeftArrow(false)
                }

                if (
                    Math.ceil(listRef.current.scrollLeft + listRef.current.offsetWidth) !== listRef.current.scrollWidth
                ) {
                    setRightArrow(true)
                } else {
                    setRightArrow(false)
                }
            }
        }
    }, [scrollLeft])

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
                    onClick={() => setScrollLeft((prev) => prev - 100)}
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
                        setScrollLeft((prev) => prev + 100)
                    }}
                />
            )}
            <ListWrapper
                justifyContent={justifyContent}
                alignItems={alignItems}
                direction={direction}
                ref={listRef}
                gap={gap}
                width={width}
                fontSize={fontSize}
                wrap={wrap}
                scroll={scroll}
            >
                {children}
            </ListWrapper>
        </Wrapper>
    )
}

export default List
