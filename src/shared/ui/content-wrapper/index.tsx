import styled from 'styled-components'

const ContentWrapper = styled.div<{ padding?: string; mobilePadding?: string }>`
    display: flex;
    flex-direction: column;
    padding: ${({ padding }) => padding ?? '40px'};

    @media (max-width: 600px) {
        padding: ${({ mobilePadding }) => mobilePadding ?? '10px'};
    }
`

export default ContentWrapper
