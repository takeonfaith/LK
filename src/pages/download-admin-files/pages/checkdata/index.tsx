import { adminLinksModel } from '@entities/admin-links'
import React from 'react'
import AdminLinksTemplate from 'widgets/admin-links-template'

const DownloadCheckdata = () => {
    const { data } = adminLinksModel.selectors.use()
    return <AdminLinksTemplate title={'Скачать отчеты по анкете'} links={data?.checkdata} />
}

export default DownloadCheckdata
