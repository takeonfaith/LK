import token from '@utils/token'
import { $api } from './config'
import { SuperiorRoom } from './model'

export const get = () => {
    return $api.get(`?getRequestHighComfort&token=${token()}`)
}

export const post = (args: SuperiorRoom) => {
    // eslint-disable-next-line no-console
    console.log(args)

    //  const formData = new FormData()
    //  formData.set('token', token())
    //  formData.set('saveCheckData', '1')

    //  for (const [key, value] of Object.entries(args)) {
    //      formData.set(key, value)
    //  }

    return { data: null }
}
