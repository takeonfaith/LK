import styled from 'styled-components'

const SelectItem = styled.li<{ isSelected: boolean }>`
    list-style-type: none;
    background: var(${({ isSelected }) => (isSelected ? '--mildPurple' : '')});
    color: ${({ isSelected }) => (isSelected ? '#fff' : '')};

    padding: 5px 10px;
`

export default SelectItem
