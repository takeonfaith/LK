const getDataLength = (data: any[] | Record<string, any> | null) =>
    Array.isArray(data) ? data?.length : Object.keys(data ?? {}).length

export default getDataLength
