import axios from 'axios'

export type LoginData = { login: string; password: string }

export const getUser = ({ login, password }: LoginData) => {
    // TODO: add base axios with origin and interceptors
    return axios.post(
        'https://e.mospolytech.ru/lk_api.php',
        'ulogin=' + encodeURIComponent(login) + '&upassword=' + encodeURIComponent(password),
    )
}
