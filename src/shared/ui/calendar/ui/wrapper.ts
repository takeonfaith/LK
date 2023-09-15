import { MEDIA_QUERIES } from '@shared/constants'
import Flex from '@shared/ui/flex'
import styled from 'styled-components'

export const Wrapper = styled(Flex)`
    --time-width: 55px;

    ${MEDIA_QUERIES.isMobile} {
        --time-width: 35px;
    }
`
