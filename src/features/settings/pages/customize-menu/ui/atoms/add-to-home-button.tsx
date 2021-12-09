import React from 'react'
import { HiHome, HiOutlineHome } from 'react-icons/hi'
import Button from '../../../../../../shared/ui/atoms/button'

interface Props {
    chosen: boolean
    onClick: (e?: React.MouseEvent<HTMLElement>) => void
}

const AddToHomeButton = ({ chosen, onClick }: Props) => {
    return <Button icon={chosen ? <HiHome style={{ color: 'var(--blue)' }} /> : <HiOutlineHome />} onClick={onClick} />
}

export default AddToHomeButton
