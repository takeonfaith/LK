const getSearchHistory = () => JSON.parse(localStorage.getItem('search_history') ?? '[]') as string[]

export default getSearchHistory
