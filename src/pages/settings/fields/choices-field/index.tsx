import { FieldProps } from '@pages/settings/model'
import AddedElementsList, { FilterElementList } from '@shared/ui/added-elements-list'
import React, { useState } from 'react'

const ChoicesFiled = (props: FieldProps) => {
    const { value, additionalActions } = props
    const [list, setList] = useState<FilterElementList>(value as FilterElementList)
    const handleRemove = (id: string) => additionalActions?.onRemoveOne?.(id)
    const handleAdd = () => additionalActions?.onAdd?.()
    return <AddedElementsList list={list} onRemoveOne={handleRemove} onAddElement={handleAdd} setList={setList} />
}

export default ChoicesFiled
