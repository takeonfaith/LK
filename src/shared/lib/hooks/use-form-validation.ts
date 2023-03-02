/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
type TRule = {
    text: string
    test: (...values: string[]) => boolean
    visible?: boolean
}
export type TRules = TRule[]

const useFormValidation = (rules: TRules, values: string[]) => {
    const validationError = rules.find(({ test }) => !test(...values))
    const allChecked = !validationError
    const isActive = !values.find((val) => val.length === 0) && allChecked

    return { allChecked, isActive, validationError }
}

export default useFormValidation
