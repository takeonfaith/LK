import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ShortCutList = styled.ul`
    display: flex;
    width: 100%;
    list-style-type: none;
    flex-wrap: wrap;
    gap: 10px;
`

export const ShortCutItem = styled.li`
    min-width: 150px;
    max-width: 250px;
    width: 15%;
    height: fit-content;

    transition: 0.2s;
    cursor: pointer;

    @media (max-width: 1000px) {
        width: calc(50% - 5px);
        max-width: none;
    }
`

export const ShortCutLinkContainer = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 130px;
    text-align: center;
    padding: 15px;

    border-radius: var(--brSemi);
    box-shadow: var(--leftside-bar-shadow);

    color: white;
    text-decoration: none;

    & > b {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        width: 100%;
        display: block;
    }

    & > svg {
        width: 50px;
        height: 50px;
        margin-bottom: 5px;
    }

    @media (max-width: 600px) {
        border-radius: var(--brLight);
        flex-direction: row;
        height: fit-content;
        padding: 10px;
        justify-content: flex-start;
        text-align: start;

        & > b {
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        & > svg {
            width: 30px;
            height: 30px;
            margin-bottom: 0px;
            margin-right: 7px;
        }
    }
`
