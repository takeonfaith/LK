import { SCREEN_IPHONE_XR } from '@shared/consts'
import Flex from '@shared/ui/flex'
import styled from 'styled-components'

export const Wrapper = styled(Flex)`
    --time-width: 55px;

    @media (max-width: ${SCREEN_IPHONE_XR}) {
        --time-width: 35px;
    }
`
