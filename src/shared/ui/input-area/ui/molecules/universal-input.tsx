import React from 'react'
import Select, { SelectPage } from '@features/select'
import Checkbox from '@ui/atoms/checkbox'
import { Input } from '@ui/atoms'
import { IComplexInputAreaData, IInputArea, IInputAreaData } from '@ui/input-area/model'

type Props = IInputAreaData & {
    documents?: { files: File[]; required: boolean }
    changeInputArea: boolean
    setData: React.Dispatch<React.SetStateAction<IInputArea>>
    indexI: number
    indexJ?: number
}

const UniversalInput = ({
    value,
    required,
    width,
    indexI,
    indexJ,
    type,
    items,
    title,
    documents,
    changeInputArea,
    setData,
    mask,
}: Props) => {
    const handleChangeValue = (value: string | boolean, i: number, j?: number) => {
        setData((area) => {
            if (Array.isArray(area.data[0])) {
                ;(area.data as IComplexInputAreaData)[i][j ?? 0].value = value
            } else {
                ;(area.data[i] as IInputAreaData).value = value
            }
            return { ...area }
        })
    }

    const handleChangeSelect = (page: SelectPage, i: number, j?: number) => {
        setData((area) => {
            if (Array.isArray(area.data[0])) {
                ;(area.data as IComplexInputAreaData)[i][j ?? 0].value = page
            } else {
                ;(area.data[i] as IInputAreaData).value = page
            }
            return { ...area }
        })
    }

    return type !== 'select' || !items ? (
        type === 'checkbox' ? (
            <Checkbox
                text={title}
                isActive={changeInputArea && !documents}
                checked={value as boolean}
                setChecked={(value) => handleChangeValue(!value, indexI, indexJ)}
            />
        ) : (
            <Input
                value={value as string}
                title={title}
                setValue={(value) => handleChangeValue(value, indexI, indexJ)}
                type={type}
                isActive={changeInputArea && !documents}
                inputAppearance={changeInputArea && !documents}
                placeholder={title}
                required={required}
                mask={mask}
            />
        )
    ) : (
        <Select
            items={items}
            setSelected={(value) => handleChangeSelect(value as SelectPage, indexI, indexJ)}
            selected={value as SelectPage}
            isActive={changeInputArea && !documents}
            title={title}
            width={width}
        />
    )
}

export default UniversalInput
