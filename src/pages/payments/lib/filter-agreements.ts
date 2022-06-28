import { Agreement } from '@api/model'

const filterAgreements = (agreements: Agreement[]) => {
    return agreements?.filter((item) => new Date(item?.date) > new Date('2022-02-1'))
}

export default filterAgreements
