import styled from 'styled-components'

const ColorPlate = styled.div<{ color: string }>`
    width: 7vw;
    max-width: 300px;
    background: ${({ color }) => color};
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-weight: bold;
    padding: 8px;
    color: #fff;
    font-size: 0.7rem;
    text-shadow: 0 0 30px #00000045;
`

export default ColorPlate
