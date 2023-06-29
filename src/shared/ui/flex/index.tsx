import styled from 'styled-components'

type JC = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around'
type AI = 'flex-start' | 'center' | 'flex-end'
type Direction = 'row' | 'column'

const Flex = styled.div<{
    jc?: JC
    ai?: AI
    w?: string
    h?: string
    gap?: string
    d?: Direction
    mw?: string
    wrap?: boolean
}>`
    width: ${({ w }) => w ?? '100%'};
    max-width: ${({ mw }) => mw};
    height: ${({ h }) => h ?? 'fit-content'};
    gap: ${({ gap }) => gap ?? '0'};
    display: flex;
    align-items: ${({ ai }) => ai ?? 'center'};
    justify-content: ${({ jc }) => jc ?? 'flex-start'};
    flex-direction: ${({ d }) => d ?? 'row'};
    flex-wrap: ${({ wrap }) => wrap && 'wrap'};
`

export default Flex
