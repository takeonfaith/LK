import { useState, useLayoutEffect } from 'react'

const QUERIES = [
    { query: '(max-width: 766px)', title: 'isMobile', value: 'mobile' },
    { query: '(min-width: 767px) and (max-width: 1199px)', title: 'isTablet', value: 'tablet' },
    { query: '(min-width: 1200px)', title: 'isDesktop', value: 'desktop' },
] as const

type QueryType = typeof QUERIES

const getValues = (
    mediaQueryList: {
        mql: MediaQueryList
        title: QueryType[number]['title']
    }[],
) => {
    return mediaQueryList.reduce((acc, value) => {
        acc[value.title] = value.mql.matches
        return acc
    }, {} as Record<QueryType[number]['title'], boolean>)
}

const useCurrentDevice = () => {
    const mediaQueryList = QUERIES.map(({ query, title }) => ({ mql: matchMedia(query), title }))
    const [values, setValues] = useState(getValues(mediaQueryList))

    useLayoutEffect(() => {
        mediaQueryList.forEach(({ mql }) =>
            mql.addEventListener('change', () => {
                setValues(getValues(mediaQueryList))
            }),
        )

        return () =>
            mediaQueryList.forEach(({ mql }) =>
                mql.removeEventListener('change', () => {
                    setValues(getValues(mediaQueryList))
                }),
            )
    }, [])

    return {
        ...values,
        currentDevice: Object.keys(values).find((el: string) => values[el as keyof typeof values] === true),
    }
}

export default useCurrentDevice
