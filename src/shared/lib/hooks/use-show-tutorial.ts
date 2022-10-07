const useShowTutorial = () => {
    const seen = JSON.parse(localStorage.getItem('tutorial') ?? 'false') as boolean

    const setSeen = (value: boolean) => {
        localStorage.setItem('tutorial', value.toString())
    }

    return { seen, setSeen }
}

export default useShowTutorial
