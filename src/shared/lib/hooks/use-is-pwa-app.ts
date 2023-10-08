export const useIsPwaApp = () => {
    return window.matchMedia('(display-mode: standalone)').matches
}
