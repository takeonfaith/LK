import { SelectPage } from '@features/select'

export interface IInputAreaCheckbox {
    fieldName: string
    value: boolean
    title: string
    required?: boolean
    fileNeeded?: boolean
}

export interface IInputAreaData {
    fieldName: string
    title: string
    value: string | SelectPage | boolean
    type?: 'select' | 'text' | 'tel' | 'email' | 'date' | 'checkbox' | 'number' | 'textarea'
    items?: SelectPage[]
    width?: string
    required?: boolean
    mask?: boolean
}

export type IComplexInputAreaData = IInputAreaData[][]

export interface IInputArea {
    title: string
    hint?: string
    data: IInputAreaData[] | IComplexInputAreaData
    default?: IInputAreaData[] | IComplexInputAreaData
    confirmed?: boolean
    optional?: boolean
    documents?: {
        files: File[]
        required: boolean
        checkboxCondition?: 'straight' | 'reverse'
        fieldName: string
        maxFiles?: number
    }
    addNew?: boolean
    optionalCheckbox?: IInputAreaCheckbox
}
