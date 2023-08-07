export interface UserToken {
    token: string
    jwt: string | null
    jwt_refresh: string | null
}

export interface ADName {
    fio: string
    pn: string
}
