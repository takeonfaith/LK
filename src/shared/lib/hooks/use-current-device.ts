import { useState, useLayoutEffect } from 'react'

const QUERIES = [
    { query: '(max-width: 766px)', title: 'isMobile' },
    { query: '(min-width: 767px) and (max-width: 1199px)', title: 'isTablet' },
    { query: '(min-width: 1200px)', title: 'isDesktop' },
] as const

const getValues = (
    mediaQueryList: {
        mql: MediaQueryList
        title: (typeof QUERIES)[number]['title']
    }[],
) => {
    return mediaQueryList.reduce((acc, value) => {
        acc[value.title] = value.mql.matches
        return acc
    }, {} as Record<(typeof QUERIES)[number]['title'], boolean>)
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

    return values
}

export default useCurrentDevice
