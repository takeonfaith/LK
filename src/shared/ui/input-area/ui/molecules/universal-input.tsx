import Select, { SelectPage } from '@features/select'
import { Input, TextArea } from '@ui/atoms'
import Checkbox from '@ui/atoms/checkbox'
import { CheckboxDocs, IComplexInputAreaData, IInputArea, IInputAreaData, IInputAreaFiles } from '@ui/input-area/model'
import { DateInterval } from '@ui/molecules'
import { CheckboxDocumentList, RadioButtonList } from '@ui/organisms'
import { RadioButton } from '@ui/organisms/radio-button-list'
import React, { useState } from 'react'
import { specialFieldsNameT } from "@entities/applications/consts";

type Props = IInputAreaData & {
    documents?: IInputAreaFiles
    changeInputArea: boolean
    setData: React.Dispatch<React.SetStateAction<IInputArea>>
    indexI: number
    indexJ?: number
    specialFieldsName?: specialFieldsNameT
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
        placeholder,
        autocomplete,
        isSpecificRadio,
        specialType,
        specialFieldsName,
        minValueInput,
        maxValueInput
    } = props

    const isActive = editable ?? (changeInputArea && !documents)
    const [validDates, setValidDates] = useState(true)

    const handleChangeValue = (value: string | boolean, i: number, j?: number) => {
        setData((area) => {
            if (Array.isArray(area.data[0])) {
                ;(area.data as IComplexInputAreaData)[i][j ?? 0].value = value
            } else {
                if ((area.data[i] as IInputAreaData).type === 'checkbox-docs') {
                    ;((area.data[i] as IInputAreaData).items as CheckboxDocs[])[j ?? 0].value = !!value
                } else {
                    ;(area.data[i] as IInputAreaData).value = value
                }
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

    const handleLoadFiles = (files: File[], i: number, j?: number) => {
        setData((area) => {
            ;((area.data[i] as IInputAreaData).items as CheckboxDocs[])[j ?? 0].files = files
            return { ...area }
        })
    }

    const handleRadio = (button: RadioButton | null) => {
        setData((area) => {
            ;(area.data[indexI] as IInputAreaData).value = button
            return { ...area }
        })
    }

    const handleDates = (dates: string[]) => {
        setData((area) => {
            ;(area.data[indexI] as IInputAreaData).value = dates
            return { ...area }
        })
    }
    if (!!specialType && specialType !== specialFieldsName) {
        return null
    }

    return (type !== 'select' && type !== 'multiselect') || !items ? (
        type === 'checkbox' ? (
            <Checkbox
                text={title}
                isActive={isActive}
                checked={value as boolean}
                setChecked={(value) => handleChangeValue(value, indexI, indexJ)}
            />
        ) : type === 'textarea' ? (
            <TextArea
                value={value as string}
                title={title}
                setValue={(value) => handleChangeValue(value, indexI, indexJ)}
                isActive={isActive}
                textAreaAppearance={isActive}
                placeholder={placeholder ?? title}
                required={required}
                width={width}
            />
        ) : type === 'checkbox-docs' ? (
            <CheckboxDocumentList
                title={title}
                items={items as CheckboxDocs[]}
                setChecked={(value, j?: number) => handleChangeValue(!value, indexI, j)}
                setFiles={(files, j?: number) => handleLoadFiles(files, indexI, j)}
            />
        ) : type === 'date-interval' ? (
            <DateInterval
                title={title}
                required={required}
                dates={value as string[]}
                setDates={(dates: string[]) => handleDates(dates)}
                valid={validDates}
                setValid={setValidDates}
            />
        ) : type === 'radio' ? (
            <RadioButtonList
                buttons={items as RadioButton[]}
                title={title}
                required={required}
                current={value as RadioButton}
                setCurrent={handleRadio}
                isSpecificRadio={isSpecificRadio}
            />
        ) : (
            <Input
                value={value as string}
                title={title}
                minValue = {minValueInput}
                maxValue = {maxValueInput}
                setValue={(value) => handleChangeValue(value, indexI, indexJ)}
                type={type}
                isActive={isActive}
                inputAppearance={isActive}
                placeholder={placeholder ?? title}
                required={required}
                mask={mask}
                width={width}
                autocomplete={autocomplete}
            />
        )
    ) : (
        <Select
            items={items as SelectPage[]}
            setSelected={(value: any) => handleChangeSelect(value as SelectPage | SelectPage[], indexI, indexJ)}
            selected={value as SelectPage}
            isActive={isActive}
            title={title}
            width={width}
            multiple={type === 'multiselect'}
            required={required}
        />
    )
}

export default UniversalInput
