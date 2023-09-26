import { MEDIA_QUERIES } from '@shared/constants'
import styled from 'styled-components'

const ContentWrapper = styled.div<{ padding?: string; mobilePadding?: string }>`
    display: flex;
    flex-direction: column;
    padding: ${({ padding }) => padding ?? '40px'};
    width: 100%;
    height: 100%;
    color: var(--text);

    ${MEDIA_QUERIES.isMobile} {
        padding: ${({ mobilePadding }) => mobilePadding ?? '10px'};
    }
`

export default ContentWrapper
