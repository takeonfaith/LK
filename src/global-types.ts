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
        search?: string
        limit?: number
        page?: number
    }

    /**
     * Выбор типа. Если первый существует, финальный тип будет такой же. Если же нет - как второй
     */
    type TypeChoice<Prefered, Second> = Prefered extends void ? Second : Prefered
}

export {}
