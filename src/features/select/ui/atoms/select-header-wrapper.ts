import { INPUT_HEIGHT } from '@shared/constants/input-size'
import { Size } from '@shared/ui/types'
import styled from 'styled-components'
import { getValueFromSize } from 'widgets/slider/lib/get-value-from-size'

const SelectHeaderWrapper = styled.div<{ multiple: boolean; appearance: boolean; size: Size }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: ${getValueFromSize(INPUT_HEIGHT)};

    padding: ${({ multiple }) => (multiple ? '5px 10px 5px 5px' : '5px 10px')};
    box-shadow: ${({ appearance }) => appearance && 'var(--block-content-shadow)'};
    position: relative;
    background: var(--block-content);
    border-radius: 6px;
    overflow: hidden;

    &:hover {
        filter: brightness(0.98);
    }
`

export default SelectHeaderWrapper
