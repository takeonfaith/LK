import { SelectPage } from '..'

const findCurrentPage = (pages: SelectPage[], path: string[]): SelectPage[] | undefined => {
    const page = pages.find((page) => page.id.toString() === path[0])

    if (path.length && page?.children) {
        path.shift()
        return findCurrentPage(page.children, path)
    } else return page ? page.children : pages
}

export default findCurrentPage
