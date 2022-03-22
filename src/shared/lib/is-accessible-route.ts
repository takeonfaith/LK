import { AdminLinks } from '@api/model'

const isAccessibleRoute = (title: string, links: Nullable<AdminLinks>) =>
    (title === 'Скачать отчеты' &&
        (!!links?.accepts.length || !!links?.agreements.length || !!links?.checkdata.length)) ||
    title !== 'Скачать отчеты'

export default isAccessibleRoute
