export const buildRealLink = (link: string, params: Record<string, string>): string => {
    let realLink = link
    for (const key in params) {
        realLink = realLink.replace(`:${key}`, params[key])
    }
    return realLink
}
