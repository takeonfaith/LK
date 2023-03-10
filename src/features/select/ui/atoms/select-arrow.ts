import { FiChevronUp } from 'react-icons/fi'
import styled from 'styled-components'

const styledPropsArray = ['isOpen']

const SelectArrow = styled(FiChevronUp).withConfig({
    shouldForwardProp: (prop) => !styledPropsArray.includes(prop),
})<{ isOpen: boolean }>`
    transition: 0.3s;
    min-width: 15px;
    transform: rotateZ(${({ isOpen }) => (!isOpen ? '180deg' : '0deg')});
`

export default SelectArrow
