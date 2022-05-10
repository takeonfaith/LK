import styled from 'styled-components'

const ContentWrapper = styled.div<{ padding?: string; mobilePadding?: string }>`
    display: flex;
    flex-direction: column;
    padding: ${({ padding }) => padding ?? '40px'};
    width: 100%;
    height: 100%;

    @media (max-width: 600px) {
        padding: ${({ mobilePadding }) => mobilePadding ?? '10px'};
    }
`

export default ContentWrapper
