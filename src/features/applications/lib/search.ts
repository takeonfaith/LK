import { Application } from '@api/model'
import normalizeString from '@utils/normalize-string'

const search = (value: string, applications: Application[]) => {
    return applications.filter((application) =>
        normalizeString(application.requestTitle).includes(normalizeString(value)),
    )
}

export default search
