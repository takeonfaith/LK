import React, { useState } from 'react'
import { AreaTitle, InputAreaWrapper } from '@shared/ui/input-area/ui'

type ITextWrapper = { title: string; collapsed?: boolean; children: React.ReactNode }

const TextWrapper = ({ title, collapsed, children }: ITextWrapper) => {
    const [openArea, setOpenArea] = useState(!collapsed)
    const [included, setIncluded] = useState(false)

    return (
        <InputAreaWrapper openArea={openArea}>
            <AreaTitle
                title={title}
                included={included}
                optional={false}
                setOpenArea={setOpenArea}
                setIncluded={setIncluded}
                collapsed={false}
                openArea={openArea}
            />
            <div className="inputs">{children}</div>
        </InputAreaWrapper>
    )
}

export default TextWrapper
