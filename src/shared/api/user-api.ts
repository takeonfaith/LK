import axios from 'axios'

export type LoginData = { login: string; password: string }

export const getUser = ({ login, password }: { login: string; password: string }) => {
    const data = {
        ulogin: login,
        upassword: password,
    }
    // TODO: add base axios with origin and interceptors
    return axios.post('https://e.mospolytech.ru/lk_api.php', data)
}
