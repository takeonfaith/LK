import { FiChevronUp } from 'react-icons/fi'
import styled from 'styled-components'

const SelectArrow = styled(FiChevronUp)<{ isOpen: boolean }>`
    transition: 0.3s;

    transform: rotateZ(${({ isOpen }) => (isOpen ? '180deg' : '0deg')});
`

export default SelectArrow
