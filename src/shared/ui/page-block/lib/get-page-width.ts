import { IRoute } from '@app/routes/general-routes'

export const getPageWidth = (exactCurrentPage: IRoute | null) => {
    exactCurrentPage?.pageSize === 'big' ? '1000px' : exactCurrentPage?.pageSize === 'small' ? '600px' : '700px'
    switch (exactCurrentPage?.pageSize) {
        case 'big':
            return '1000px'
            break

        case 'small':
            return '600px'
            break

        case 'large':
            return '963px'
            break

        default:
            return '700px'
            break
    }
}
