import { Colors } from '@shared/constants'
import { Button } from '@ui/button'
import { DotPages } from '@ui/molecules'
import { Title } from '@ui/title'
import { Align } from '@ui/types'
import limitNumber from '@utils/limit-number'
import React, { HtmlHTMLAttributes } from 'react'
import { FiChevronLeft, FiChevronRight, FiPlus } from 'react-icons/fi'
import useList from './hooks/use-list'
import { ListWrapper, StyleProps, Wrapper } from './styles'

type BaseProps = HtmlHTMLAttributes<HTMLDivElement>

export type ModifiedAlign = Align | 'evenly'

type Props = StyleProps &
    BaseProps & {
        title?: string
        children: ChildrenType
        onAdd?: () => void
        onWatchMore?: () => void
        onDelete?: () => void
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
        onWatchMore,
        onDelete,
        showPages,
        innerPadding,
        minWidth,
        wrapOnMobile,
        position,
        direction = 'vertical',
        verticalAlign = 'top',
        horizontalAlign = 'left',
        scroll = true,
        visible = true,
        ...restProps
    } = props

    if (!visible) return null

    const { listRef, leftArrow, rightArrow, handleScroll, setScrollLeft, pageOffset, amountOfPages, currentPage } =
        useList(gap)

    return (
        <Wrapper padding={padding} position={position} width={width} minWidth={minWidth} height={height}>
            <Title size={4} align="left" bottomGap visible={!!title} width="calc(fit-content + 50px)">
                {title}
                {onAdd && (
                    <Button
                        icon={<FiPlus />}
                        width="35px"
                        height="15px"
                        background={Colors.grey.transparent3}
                        textColor="var(--reallyBlue)"
                        onClick={onAdd}
                    />
                )}
                {onWatchMore && (
                    <Button
                        width="50px"
                        height="15px"
                        background={Colors.blue.transparent2}
                        textColor={Colors.blue.light1}
                        onClick={onWatchMore}
                        text="Ещё"
                    />
                )}
                {onDelete && (
                    <Button
                        width="fit-content"
                        height="15px"
                        background={Colors.grey.transparent3}
                        textColor="var(--reallyBlue)"
                        onClick={onDelete}
                        text="Удалить"
                    />
                )}
            </Title>

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
                onScroll={handleScroll}
                {...restProps}
            >
                {children}
            </ListWrapper>
            {(rightArrow || leftArrow) && (
                <div className="bottom-wrapper">
                    {leftArrow && (
                        <Button
                            background="transparent"
                            minWidth="40px"
                            height="25px"
                            icon={<FiChevronLeft />}
                            className="left-button"
                            textColor={Colors.grey.main}
                            onClick={() => {
                                setScrollLeft((prev) =>
                                    limitNumber(prev - pageOffset - (gap ?? 0), listRef.current?.scrollWidth ?? 0),
                                )
                            }}
                        />
                    )}
                    {showPages && <DotPages direction="horizontal" current={currentPage} amount={amountOfPages} />}
                    {rightArrow && (
                        <Button
                            background="transparent"
                            minWidth="40px"
                            height="25px"
                            icon={<FiChevronRight />}
                            className="right-button"
                            textColor={Colors.grey.main}
                            onClick={() => {
                                setScrollLeft((prev) =>
                                    limitNumber(prev + pageOffset + (gap ?? 0), listRef.current?.scrollWidth ?? 0),
                                )
                            }}
                        />
                    )}
                </div>
            )}
        </Wrapper>
    )
}

export default React.memo(List) as typeof List
