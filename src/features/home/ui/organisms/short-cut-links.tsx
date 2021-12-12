import React from 'react'
import { ShortCutLinksType } from '@consts'
import { useSettings } from '@utils/contexts/settings-context'
import getChosenRoutes from '../../../../widgets/leftside-bar/lib/get-chosen-routes'
import { Section } from '../atoms/section'
import { ShortCutItem, ShortCutList } from '../atoms/short-cut'
import ShortCutLink from '../molecules/short-cut-link'

export default ShortCutLinks

const colors = ['purple', 'lightGreen', 'red', 'blue']
function ShortCutLinks() {
    const { setting } = useSettings<ShortCutLinksType>('shortCutLinks')
    const enabledLeftsideBarItems = getChosenRoutes(setting)

    return (
        <Section>
            <ShortCutList>
                {setting.map((menuIndex, i) => (
                    <ShortCutItem key={menuIndex}>
                        <ShortCutLink
                            title={enabledLeftsideBarItems[menuIndex].title}
                            icon={enabledLeftsideBarItems[menuIndex].icon}
                            to={enabledLeftsideBarItems[menuIndex].path}
                            color={colors[i]}
                        />
                    </ShortCutItem>
                ))}
            </ShortCutList>
        </Section>
    )
}
