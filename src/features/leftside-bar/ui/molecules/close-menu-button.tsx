import React from 'react'
import { FiX } from 'react-icons/fi'
import { menuModel } from '../../../../entities/menu'
import { Button } from '../../../../shared/ui/atoms'

const CloseMenuButton = () => {
    const { isOpen } = menuModel.selectors.useMenu()
    return (
        <>
            <Button
                icon={<FiX />}
                onClick={() => menuModel.events.changeOpen({ isOpen: !isOpen })}
                text={'Закрыть меню'}
                width={'100%'}
            />
        </>
    )
}

export default CloseMenuButton
