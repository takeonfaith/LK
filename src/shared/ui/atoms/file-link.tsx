import { IInputAreaLink } from '@ui/input-area/model'
import React from 'react'
import { FiFileText, FiLink } from 'react-icons/fi'
import styled from 'styled-components'

const FileLinkWrapper = styled.a`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    column-gap: 5px;
    text-decoration: none;
    color: var(--text);
    padding: 5px;
    border-radius: var(--brLight);

    .title {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: bold;
        font-size: 0.8em;
    }

    .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 28px;
        width: 28px;
        height: 28px;

        svg {
            width: 21px;
            height: 21px;
        }
    }
`

const FileLink = ({ title, link, type }: IInputAreaLink) => {
    return (
        <FileLinkWrapper href={link} target="_blank">
            <div className="icon">{type === 'document' ? <FiFileText /> : <FiLink />}</div>
            <div className="title">{title}</div>
        </FileLinkWrapper>
    )
}

export default FileLink
