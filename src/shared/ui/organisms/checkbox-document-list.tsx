import { Title } from '@ui/atoms'
import { CheckboxDocs } from '@ui/input-area/model'
import { CheckboxDocument } from '@ui/molecules'
import React from 'react'
import styled from 'styled-components'

const CheckboxDocumentListWrapper = styled.div``

interface Props {
    title: string
    items: CheckboxDocs[]
    setChecked: (args: any, j?: number) => void
    setFiles: (args: any, j?: number) => void
}

const CheckboxDocumentList = ({ title, items, setChecked, setFiles }: Props) => {
    return (
        <CheckboxDocumentListWrapper>
            <Title size={5} align="left" bottomGap>
                {title}
            </Title>
            {items.map(({ value, title, files, maxFiles, checkboxCondition }, j) => {
                return (
                    <CheckboxDocument
                        checkbox={{ checked: value, setChecked: () => setChecked(value, j), text: title }}
                        loadfile={{
                            files,
                            maxFiles,
                            maxFileSizeInBytes: 0,
                            isActive: true,
                            setFiles: (files) => setFiles(files, j),
                        }}
                        docVisible={checkboxCondition === 'straight' ? value : !value}
                        key={title}
                    />
                )
            })}
        </CheckboxDocumentListWrapper>
    )
}

export default CheckboxDocumentList
