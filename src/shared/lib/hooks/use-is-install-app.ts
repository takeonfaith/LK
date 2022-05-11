const useIsInstallApp = () => {
    return JSON.parse(localStorage.getItem('isNeedInstallation') ?? 'true')
}

export default useIsInstallApp
