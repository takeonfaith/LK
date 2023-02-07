import styled from 'styled-components'

const ColorPlate = styled.div<{ color: string }>`
    width: 50vw;
    max-width: 300px;
    background: ${({ color }) => color};
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-weight: bold;
    padding: 15px;
    color: #fff;
    text-shadow: 0 0 30px #000000;
`

export default ColorPlate
