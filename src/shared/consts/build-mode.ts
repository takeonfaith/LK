/**
 * @constant
 * use when you need to hide some functionality on the production
 * @example
 * Component: () => isProduction ? PageIsNotReady : SettingsPage
 **/
export const isProduction = (import.meta.env.VITE_BUILD_MODE as string)?.trimEnd() === 'PRODUCTION'
