export type SideMenuProps = {
    filter: string | null
    isGroup: boolean
    search: string
    baseSearchValue: string
    setSearch: React.Dispatch<React.SetStateAction<string>>
}
