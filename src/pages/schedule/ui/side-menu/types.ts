import { Hint } from '@shared/ui/search'

export type SideMenuProps = {
    handleReturnToMySchedule: () => void
    onHintClick: (isSearchingGroup: boolean) => (hint: Hint | undefined) => void
    handleValue: (value: string) => void
    baseSearchValue: string
}
