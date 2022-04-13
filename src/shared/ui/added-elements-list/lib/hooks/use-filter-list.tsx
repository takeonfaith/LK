import { FilterElementList } from '@ui/added-elements-list'
import { useEffect, useState } from 'react'

const useFilterList = (listKeys: string[], setList: React.Dispatch<React.SetStateAction<FilterElementList>>) => {
    const [removeAll, setRemoveAll] = useState(false)
    const [removeOne, setRemoveOne] = useState<string | null>(null)
    const [closed, setClosed] = useState(true)

    useEffect(() => {
        if (removeAll) {
            setTimeout(() => {
                setRemoveAll(false)
                setList(null)
            }, 200)
        }
    }, [removeAll])

    useEffect(() => {
        if (listKeys.length) {
            if (closed) setClosed(false)
        } else setClosed(true)
    }, [listKeys.length])

    useEffect(() => {
        setTimeout(() => {
            if (removeOne !== null) {
                setRemoveOne(null)
                setList((prev) => {
                    if (prev) delete prev[removeOne]

                    return { ...prev }
                })
            }
        }, 500)
    }, [removeOne])

    return { removeAll, removeOne, setRemoveAll, setRemoveOne }
}

export default useFilterList
