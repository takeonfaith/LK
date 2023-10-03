import { MEDIA_QUERIES } from '@shared/constants'
import { Size } from '@shared/ui/types'
import styled from 'styled-components'
import { FONT_SIZES, MOBILE_FONT_SIZES } from 'widgets/slider/consts'
import { getValueFromSize } from 'widgets/slider/lib/get-value-from-size'

export const SliderItemWrapper = styled.div<{ elementsVisible: number; condition: boolean; size: Size }>`
    width: 100%;
    height: 100%;
    min-width: calc(100% / ${({ elementsVisible }) => elementsVisible});
    padding: 10px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    opacity: ${({ condition }) => (condition ? 0.7 : 0.3)};
    transition: 0.2s opacity, 0.2s transform;
    z-index: 1;
    cursor: pointer;
    user-select: none;
    color: var(--text);

    & > b {
        word-break: normal;
        text-overflow: ellipsis;
        font-weight: 600;
        font-size: ${getValueFromSize(FONT_SIZES)};
    }

    &:hover {
        filter: ${({ condition }) => condition && 'brightness(0.8)'};
    }

    &.active {
        opacity: 1;
    }

    &:active {
        transform: scale(0.97);
    }

    ${MEDIA_QUERIES.isMobile} {
        & > b {
            font-size: ${getValueFromSize(MOBILE_FONT_SIZES)};
        }
    }
`
