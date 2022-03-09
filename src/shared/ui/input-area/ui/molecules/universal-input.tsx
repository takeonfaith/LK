import React from 'react'
import Select, { SelectPage } from '@features/select'
import Checkbox from '@ui/atoms/checkbox'
import { Input, TextArea } from '@ui/atoms'
import { IComplexInputAreaData, IInputArea, IInputAreaData } from '@ui/input-area/model'

type Props = IInputAreaData & {
    documents?: { files: File[]; required: boolean }
    changeInputArea: boolean
    setData: React.Dispatch<React.SetStateAction<IInputArea>>
    indexI: number
    indexJ?: number
}

const UniversalInput = (props: Props) => {
    const {
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
        editable,
    } = props

    const isActive = editable || (changeInputArea && !documents)

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

    const handleChangeSelect = (page: SelectPage | SelectPage[], i: number, j?: number) => {
        setData((area) => {
            if (Array.isArray(area.data[0])) {
                ;(area.data as IComplexInputAreaData)[i][j ?? 0].value = page
            } else {
                ;(area.data[i] as IInputAreaData).value = page
            }
            return { ...area }
        })
    }

    return (type !== 'select' && type !== 'multiselect') || !items ? (
        type === 'checkbox' ? (
            <Checkbox
                text={title}
                isActive={changeInputArea && !documents}
                checked={value as boolean}
                setChecked={(value) => handleChangeValue(!value, indexI, indexJ)}
            />
        ) : type === 'textarea' ? (
            <TextArea
                value={value as string}
                title={title}
                setValue={(value) => handleChangeValue(value, indexI, indexJ)}
                isActive={isActive}
                textAreaAppearance={isActive}
                placeholder={title}
                required={required}
                width={width}
            />
        ) : (
            <Input
                value={value as string}
                title={title}
                setValue={(value) => handleChangeValue(value, indexI, indexJ)}
                type={type}
                isActive={isActive}
                inputAppearance={isActive}
                placeholder={title}
                required={required}
                mask={mask}
                width={width}
            />
        )
    ) : (
        <Select
            items={items}
            setSelected={(value: any) => handleChangeSelect(value as SelectPage | SelectPage[], indexI, indexJ)}
            selected={value as SelectPage}
            isActive={isActive}
            title={title}
            width={width}
            multiple={type === 'multiselect'}
        />
    )
}

export default UniversalInput
