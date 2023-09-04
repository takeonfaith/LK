import { IRoute } from '@app/routes/general-routes'

export const getPageWidth = (exactCurrentPage: IRoute | null) =>
    exactCurrentPage?.pageSize === 'big' ? '1000px' : exactCurrentPage?.pageSize === 'small' ? '600px' : '700px'
