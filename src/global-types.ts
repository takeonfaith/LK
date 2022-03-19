import { ReactNode } from 'react'

declare global {
    type Nullable<T> = T | null | undefined
    type ChildrenType = Nullable<ReactNode[] | ReactNode | string>
}

export {}
