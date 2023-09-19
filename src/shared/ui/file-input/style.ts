import { Colors } from '@shared/constants'
import styled from 'styled-components'

const FileInputWrapper = styled.label<{ showPulse: boolean; isActive: boolean; topPadding: boolean }>`
    width: 100%;
    min-height: 150px;
    border-radius: var(--brLight);
    background: ${Colors.blue.transparent2};
    border: ${({ showPulse }) => !showPulse && `3px dashed ${Colors.blue.main}`};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: ${({ isActive }) => isActive && 'pointer'};
    pointer-events: ${({ isActive }) => !isActive && 'none'};
    opacity: ${({ isActive }) => !isActive && 0.4};
    box-shadow: ${({ showPulse }) => showPulse && '0px 0px 1px 3px var(--reallyBlue)'};
    position: relative;

    .info {
        left: 10px;
        top: 10px;
        position: absolute;
        display: flex;
        gap: 5px;
        pointer-events: none;

        .info-item {
            padding: 5px 10px;
            background: var(--block);
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.7em;
            font-weight: 600;
            pointer-events: none;
        }
    }

    .uploaded-files {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        flex-wrap: wrap;
        padding: ${({ topPadding }) => topPadding && '40px 20px'};

        .file-preview {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: relative;
            padding: 10px;
            border-radius: var(--brLight);

            .file-body {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }

            &:hover {
                background: var(--almostTransparentOpposite);
            }

            .file-name {
                max-width: 100px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 0.8em;
            }

            .remove-button {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 20px;
                height: 20px;
                position: absolute;
                right: 5px;
                top: 5px;

                svg {
                    width: 18px;
                    height: 18px;
                }
            }

            span {
                font-size: 0.8em;
                opacity: 0.8;
            }
            svg {
                width: 45px;
                height: 45px;
            }
        }
    }

    input[type='file'] {
        display: none;
    }

    .message {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        opacity: 0.7;
        color: ${Colors.blue.light2};
        pointer-events: none;

        svg {
            width: 40px;
            height: 40px;
            margin-bottom: 10px;
        }
    }
`

export default FileInputWrapper
