const useIsTestEnv = () => {
    const host = window.location.hostname
    return host.includes('localhost') || host.includes('i.mospolytech.ru')
}

export default useIsTestEnv
