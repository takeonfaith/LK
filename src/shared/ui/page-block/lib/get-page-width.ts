import { IRoute } from '@app/routes/general-routes'
import { ExtSize } from '@shared/ui/types'

const sizes: Record<ExtSize, string> = {
    small: '600px',
    middle: '700px',
    big: '1000px',
    large: '1450px',
}

export const getPageWidth = (exactCurrentPage: IRoute | null) => sizes[exactCurrentPage?.pageSize ?? 'middle']
