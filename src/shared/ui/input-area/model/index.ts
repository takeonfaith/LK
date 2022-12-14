import { SelectPage } from '@features/select'
import { RadioButton } from '@ui/organisms/radio-button-list'
import { specialFieldsNameT } from '@entities/applications/consts'

export interface IInputAreaCheckbox {
    fieldName: string
    value: boolean
    title: string
    required?: boolean
    fileNeeded?: boolean
    visible?: boolean
    editable?: boolean
}

type IInputAreaTypes =
    | 'select'
    | 'multiselect'
    | 'text'
    | 'tel'
    | 'email'
    | 'date'
    | 'checkbox'
    | 'radio'
    | 'number'
    | 'textarea'
    | 'checkbox-docs'
    | 'date-interval'
    | 'simple-text'

export interface IInputAreaFiles {
    files: File[]
    required: boolean
    checkboxCondition?: 'straight' | 'reverse'
    fieldName: string
    maxFiles?: number
}

export type CheckboxDocs = IInputAreaFiles & {
    title: string
    value: boolean
}

export type RadioChildrenForm = {
    title: string
    value: boolean
    data: IInputAreaData[]
    fieldName: string
}

export interface IInputAreaLink {
    title: string
    link: string
    type: 'document' | 'webpage'
}

export interface IInputAreaData {
    fieldName: string
    title: string
    value: string | SelectPage | boolean | SelectPage[] | null | RadioButton | string[]
    type?: IInputAreaTypes
    items?: SelectPage[] | CheckboxDocs[] | RadioButton[] | RadioChildrenForm[]
    width?: string
    required?: boolean
    mask?: boolean
    editable?: boolean
    placeholder?: string
    autocomplete?: boolean
    isSpecificRadio?: boolean
    specialType?: specialFieldsNameT
    minValueInput?: number | string
    maxValueInput?: number | string
    maxValueLength?: number | undefined
    diff?: number
    visible?: boolean
}

export type IComplexInputAreaData = IInputAreaData[][]

export interface IInputArea {
    title: string
    hint?: React.ReactNode
    alert?: React.ReactNode
    data: IInputAreaData[] | IComplexInputAreaData
    default?: IInputAreaData[] | IComplexInputAreaData
    confirmed?: boolean
    optional?: boolean
    documents?: IInputAreaFiles
    addNew?: boolean
    optionalCheckbox?: IInputAreaCheckbox
    collapsed?: boolean
    links?: IInputAreaLink[]
    specialFieldsName?: specialFieldsNameT
}
