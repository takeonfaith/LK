import React from 'react'
import styled from 'styled-components'

interface Props {
    img: string
    name: string
    title: string
}

const LeftSide = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    .img-container {
        width: 100px;
        height: 100px;
        overflow: hidden;
        border-radius: 100%;
        background: var(--orangeGradient);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
    }

    img {
        height: 100%;
    }
`

const CuratorLeftSide = ({ img, name, title }: Props) => {
    return (
        <LeftSide>
            <div className="img-container">
                <img src={img} alt="" />
            </div>
            {name}
            <h3>{title}</h3>
        </LeftSide>
    )
}

export default CuratorLeftSide
