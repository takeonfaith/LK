import { Colors } from '@consts'
import styled from 'styled-components'

const SelectHeader = styled.header<{ appearance: boolean }>`
    display: flex;
    align-items: center;
    width: calc(100% - 15px);
    column-gap: 5px;
    overflow-x: auto;
    &::-webkit-scrollbar {
        display: none;
    }

    .single-header,
    .header-item {
        display: flex;
        align-items: center;
    }

    .header-title {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 100%;
    }

    .not-chosen {
        font-size: ${({ appearance }) => appearance && '0.9em'};
        opacity: ${({ appearance }) => appearance && '0.6'};

        &.multi {
            margin-left: 5px;
        }
    }

    .header-item {
        background: ${Colors.blue.transparent};
        color: ${Colors.blue.main};
        border-radius: 6px;
        padding: 5px 10px;
        font-size: 0.85em;
        min-width: fit-content;
    }

    .icon {
        float: left;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-right: 5px;
    }
`

export default SelectHeader
