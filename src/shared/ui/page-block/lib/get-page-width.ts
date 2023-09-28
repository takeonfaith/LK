import { IRoute } from '@app/routes/general-routes'
import { ExtSize } from '@shared/ui/types'

const sizes: Record<ExtSize, string> = {
    small: '600px',
    middle: '700px',
    big: '963px',
    large: '100%',
}

export const getPageWidth = (exactCurrentPage: IRoute | null) => sizes[exactCurrentPage?.pageSize ?? 'middle']
