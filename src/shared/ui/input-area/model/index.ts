import { SelectPage } from '@features/select'
import { RadioButton } from '@ui/organisms/radio-button-list'
import { SpecialFieldsNameConfig, SpecialFieldsName } from '@entities/applications/consts'

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
    | 'hr-checkbox'
    | 'text-header'
    | 'auto-complete-input'
    | 'text-warning'

export interface IInputAreaFiles {
    files: File[]
    required: boolean
    checkboxCondition?: 'straight' | 'reverse'
    fieldName: string
    maxFiles?: number
    allowedTypes?: string[]
    maxFileSizeInMegaBytes?: number
    visible?: boolean
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
    value: string | SelectPage | boolean | SelectPage[] | null | RadioButton | string[] | IFormDropdownValue
    type?: IInputAreaTypes
    items?: SelectPage[] | CheckboxDocs[] | RadioButton[] | RadioChildrenForm[]
    suggestions?: string[]
    width?: string
    required?: boolean
    mask?: boolean
    editable?: boolean
    placeholder?: string
    autocomplete?: boolean
    isSpecificRadio?: boolean
    specialType?: SpecialFieldsName
    minValueInput?: number | string
    maxValueInput?: number | string
    maxValueLength?: number | undefined
    diff?: number
    isSpecificSelect?: boolean
    visible?: boolean
    onChange?: (value: any) => void
    onKeyPress?: (value: any) => void
    onBlur?: (value: any) => void
    onKeyDown?: (value: any) => void
    onKeyUp?: (value: any) => void
    onFocus?: (value: any) => void
}

export interface IFormDropdownValue {
    id: number
    title: string
}

export type IComplexInputAreaData = IInputAreaData[][]

export interface IInputArea {
    title: string
    hint?: React.ReactNode
    alert?: React.ReactNode
    data: (IInputAreaData | false)[] | IComplexInputAreaData
    default?: (IInputAreaData | false)[] | IComplexInputAreaData
    confirmed?: boolean
    optional?: boolean
    documents?: IInputAreaFiles
    addNew?: boolean
    optionalCheckbox?: IInputAreaCheckbox
    collapsed?: boolean
    links?: IInputAreaLink[]
    specialFieldsNameConfig?: SpecialFieldsNameConfig
}
