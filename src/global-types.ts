import { ReactNode } from 'react'

declare global {
    type Nullable<T> = T | null | undefined
    type ChildrenType = Nullable<ReactNode[] | ReactNode | string>

    type EmptyObject = Record<string, never>
    type ServerListResponse<T extends Record<string, unknown> | EmptyObject> = {
        results?: T[]
    }

    type ServerListRequest<TFilter extends Record<string, unknown> | unknown> = {
        filter?: TFilter
        limit?: number
        page?: number
    }
}

export {}
