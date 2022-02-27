import styled from 'styled-components'

const SelectHeader = styled.header`
    display: flex;
    align-items: center;
    width: calc(100% - 15px);

    .header-title {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 100%;
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
