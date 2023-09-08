import Search, { Hint } from '@shared/ui/search'
import { AxiosResponse } from 'axios'
import React, { useEffect, useState } from 'react'

type Props<T> = {
    placeholder: string
    value: string
    leftIcon?: ChildrenType
    hintIcon?: ChildrenType
    loading?: boolean
    focusOn?: any
    width?: string
    transformRequest?: (el: T) => string
    setValue: (value: string) => void
    onHintClick: (hint: Hint | undefined) => void
    onValueEmpty?: () => void
    request: (value: string) => Promise<AxiosResponse<{ items: T[] }, any>>
    customMask?: (value: string, prevValue?: string) => string
}

const SeachWithHints = <T,>({
    value,
    placeholder,
    loading,
    hintIcon,
    leftIcon,
    focusOn,
    width,
    transformRequest,
    setValue,
    request,
    onValueEmpty,
    customMask,
    onHintClick,
}: Props<T>) => {
    const [hints, setHints] = useState<Hint[]>([])
    const [loadingHints, setLoadingHints] = useState(false)

    useEffect(() => {
        if (value.length > 0) {
            setLoadingHints(true)
            request(value)
                .then((groups) => {
                    setHints(
                        groups.data.items.map((hint) => {
                            const hintString = transformRequest ? transformRequest(hint) : (hint as string)
                            return { id: hintString, title: hintString, value: hintString, icon: hintIcon }
                        }),
                    )
                    setLoadingHints(false)
                })
                .catch(() => {
                    setLoadingHints(false)
                    setHints([])
                })
        } else {
            setLoadingHints(false)
            setHints([])
            onValueEmpty?.()
        }
    }, [value])

    return (
        <Search
            value={value}
            setValue={setValue}
            placeholder={placeholder}
            hints={hints}
            width={width ?? '180px'}
            focusOn={focusOn}
            leftIcon={leftIcon}
            loading={loadingHints && loading}
            onHintClick={onHintClick}
            customMask={customMask}
        />
    )
}

export default SeachWithHints
