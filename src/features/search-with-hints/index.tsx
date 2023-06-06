import Search, { Hint } from '@shared/ui/search'
import { AxiosResponse } from 'axios'
import React, { useEffect, useState } from 'react'

type Props = {
    placeholder: string
    value: string
    leftIcon?: ChildrenType
    hintIcon?: ChildrenType
    loading?: boolean
    focusOn?: any
    setValue: React.Dispatch<React.SetStateAction<string>>
    onHintClick: (hint: Hint | undefined) => void
    onValueEmpty?: () => void
    request: (value: string) => Promise<AxiosResponse<{ items: string[] }, any>>
    customMask?: (value: string, prevValue?: string) => string
}

const SeachWithHints = ({
    value,
    setValue,
    placeholder,
    onValueEmpty,
    request,
    loading,
    onHintClick,
    hintIcon,
    customMask,
    leftIcon,
    focusOn,
}: Props) => {
    const [hints, setHints] = useState<Hint[]>([])
    const [loadingHints, setLoadingHints] = useState(false)

    useEffect(() => {
        if (value.length > 0) {
            setLoadingHints(true)
            request(value)
                .then((groups) => {
                    setHints(groups.data.items.map((hint) => ({ id: hint, title: hint, value: hint, icon: hintIcon })))
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
            width="180px"
            focusOn={focusOn}
            leftIcon={leftIcon}
            loading={loadingHints && loading}
            onHintClick={onHintClick}
            customMask={customMask}
        />
    )
}

export default SeachWithHints
