import styled from 'styled-components'

const SimpleTextWrapper = styled.div`
    width: 100%;
    text-align: start;
    margin-top: -10px;
    margin-bottom: 10px;
    .title {
        font-size: 0.83em;
        font-weight: bold;
    }
    .value {
        font-size: 0.83em;
        padding-left: 10px;
    }

    @media (max-width: 400px) {
        .date-interval-inputs {
            flex-direction: column;
        }
    }
`

interface Props {
    title?: string
    value?: string
    visible?: boolean
}

const SimpleText = ({ title, value, visible }: Props) => {
    if (visible)
        return (
            <SimpleTextWrapper>
                <span className="title">{title}:</span> <span className="value">{value}</span>
            </SimpleTextWrapper>
        )
    else return null
}

export default SimpleText
