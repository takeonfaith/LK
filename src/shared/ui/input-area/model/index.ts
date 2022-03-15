import { SelectPage } from '@features/select'

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
    | 'number'
    | 'textarea'
    | 'checkbox-docs'

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

export interface IInputAreaLink {
    title: string
    link: string
    type: 'document' | 'webpage'
}

export interface IInputAreaData {
    fieldName: string
    title: string
    value: string | SelectPage | boolean | SelectPage[] | null
    type?: IInputAreaTypes
    items?: SelectPage[] | CheckboxDocs[]
    width?: string
    required?: boolean
    mask?: boolean
    editable?: boolean
    placeholder?: string
    autocomplete?: boolean
}

export type IComplexInputAreaData = IInputAreaData[][]

export interface IInputArea {
    title: string
    hint?: string
    alert?: string
    data: IInputAreaData[] | IComplexInputAreaData
    default?: IInputAreaData[] | IComplexInputAreaData
    confirmed?: boolean
    optional?: boolean
    documents?: IInputAreaFiles
    addNew?: boolean
    optionalCheckbox?: IInputAreaCheckbox
    collapsed?: boolean
    links?: IInputAreaLink[]
}
