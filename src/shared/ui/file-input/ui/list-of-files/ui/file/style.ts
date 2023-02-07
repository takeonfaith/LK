import { Colors } from '@consts'
import styled from 'styled-components'

const FileWrapper = styled.div`
    width: 100%;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${Colors.grey.transparent3};
    border-radius: var(--brLight);

    .file-body {
        display: flex;
        gap: 5px;
        align-items: center;

        .name-and-size {
            display: flex;
            flex-direction: column;

            .file-name {
                font-size: 0.8em;
            }
        }

        svg {
            width: 22px;
            height: 22px;
        }
    }
`

export default FileWrapper
