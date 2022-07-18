export interface AdminLink {
    title: string
    url: string
}

export type AdminLinks = {
    accepts: AdminLink[]
    agreements: AdminLink[]
    checkdata: AdminLink[]
    // is absent in api
    studLogins: AdminLink[]
}
