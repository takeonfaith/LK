import { Colors } from '@consts'
import { Button } from '@ui/button'
import { DotPages } from '@ui/molecules'
import { Title } from '@ui/title'
import { Align } from '@ui/types'
import limitNumber from '@utils/limit-number'
import React from 'react'
import { FiChevronLeft, FiChevronRight, FiPlus } from 'react-icons/fi'
import useList from './hooks/use-list'
import { ListWrapper, StyleProps, Wrapper } from './styles'

export type ModifiedAlign = Align | 'evenly'

type Props = StyleProps & {
    title?: string
    children: ChildrenType
    onAdd?: () => void
    onWatchMore?: () => void
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

    const { listRef, leftArrow, rightArrow, setScrollLeft, pageOffset, amountOfPages, currentPage, setCurrentPage } =
        useList(gap)

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
                {onWatchMore && (
                    <Button
                        width="fit-content"
                        height="15px"
                        background={Colors.grey.transparentAF}
                        textColor="var(--reallyBlue)"
                        onClick={onWatchMore}
                        text="Ещё"
                    />
                )}
            </Title>
            {leftArrow && (
                <Button
                    background="var(--search)"
                    width="30px"
                    height="30px"
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
                    background="var(--search)"
                    width="30px"
                    height="30px"
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
