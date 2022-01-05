const scrollToBottom = (listRef: React.RefObject<HTMLDivElement>) => {
    if (listRef?.current) {
        listRef.current.scrollTo({
            top: listRef.current.scrollHeight,
            behavior: 'auto',
        })
    }
}

export default scrollToBottom
