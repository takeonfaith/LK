import React from 'react'
import styled from 'styled-components'

const ApplicationHeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    position: sticky;
    top: -1px;
    color: var(--text);
    background: var(--settings);
    font-size: 0.9em;

    .title {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        font-weight: bold;
    }

    @media (max-width: 1200px) {
        .structuralSubdivision,
        .notes {
            display: none;
        }
    }

    @media (max-width: 1000px) {
        .regNumber {
            display: flex;
        }
    }

    @media (max-width: 700px) {
        font-size: 0.8em;
        .structuralSubdivision {
            display: none;
        }
    }

    @media (max-width: 450px) {
        .regNumber {
            display: none;
        }
    }

    @media (max-width: 300px) {
        .regNumber,
        .regDate {
            display: none;
        }
    }
`

const ApplicationHeader = () => {
    return (
        <ApplicationHeaderWrapper>
            <div className="title name">Запрос</div>
            <div className="title regDate">Дата</div>
            <div className="title regNumber">Рег. номер</div>
            <div className="title status">Статус</div>
            <div className="title structuralSubdivision">Структурное подразделение, адрес</div>
            <div className="title notes">Примечание</div>
        </ApplicationHeaderWrapper>
    )
}

export default ApplicationHeader
