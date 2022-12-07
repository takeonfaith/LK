let thisIndex: number
const setCurrentIndex = (index: number) => {
    thisIndex = index
}

const getCurrentIndex = () => {
    return thisIndex
}
export { setCurrentIndex, getCurrentIndex }
