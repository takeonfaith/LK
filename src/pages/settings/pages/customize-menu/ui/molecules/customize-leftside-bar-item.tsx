import { PageLinkProps } from '@features/all-pages/ui/molecules/page-link'
import PageLinkContent from '@features/all-pages/ui/molecules/page-link-content'
import React from 'react'
import { CustomizeLeftsideBarWrapper } from '../atoms'
import AddToMenuButton from '../atoms/add-to-menu-buttom'

type Props = PageLinkProps & {
    chosen: boolean
    shortItemChosen?: boolean
    switchMenuItem: (id: string) => void
    switchShortChosen?: (id: string) => void
}

const CustomizeLeftside = (props: Props) => {
    const { id, chosen, switchMenuItem } = props
    return (
        <CustomizeLeftsideBarWrapper chosen={chosen} onClick={() => switchMenuItem(id)}>
            <PageLinkContent
                background="transparent"
                maxWordLength={100}
                orientation="horizontal"
                shadow={false}
                {...props}
            />
            <div className="buttons">
                <AddToMenuButton
                    chosen={chosen}
                    onClick={() => {
                        switchMenuItem(id)
                    }}
                />
            </div>
        </CustomizeLeftsideBarWrapper>
    )
}

export default React.memo(CustomizeLeftside)
