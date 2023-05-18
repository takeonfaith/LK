import { IInputAreaLink } from '@ui/input-area/model'
import React from 'react'
import { FiFileText, FiLink } from 'react-icons/fi'
import styled from 'styled-components'

export const FileLink = ({ title, link, type }: IInputAreaLink) => {
    return (
        <FileLinkWrapper href={link} target="_blank">
            <Icon>{type === 'document' ? <FiFileText /> : <FiLink />}</Icon>
            <Title>{title}</Title>
        </FileLinkWrapper>
    )
}

const FileLinkWrapper = styled.a`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    column-gap: 5px;
    text-decoration: none;
    color: var(--text);
    padding: 5px;
    border-radius: var(--brLight);
`

const Title = styled.div`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: bold;
    font-size: 0.8em;
`

const Icon = styled.div`
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
`
