/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import styled from 'styled-components'

const getPercent = (value: number, max: number) => {
    return (value / max) * 100
}

const DoubleSliderStyled = styled.div<{ left: number; width: number }>`
    display: flex;
    flex-direction: column;
    position: relative;

    .values {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    input[type='range'] {
        width: 100%;
    }

    .slider {
        position: relative;
        width: 100%;
        height: 20px;
    }

    .slider__track,
    .slider__range {
        border-radius: 3px;
        height: 5px;
        position: absolute;
    }

    .slider__track {
        background-color: var(--almostTransparent);
        width: 100%;
        z-index: 1;
    }

    .slider__range {
        width: calc(${({ width }) => width + '%'} - 5px);
        background-color: var(--blue);
        left: ${({ left }) => left + '%'};
        z-index: 2;
    }

    .thumb,
    .thumb::-webkit-slider-thumb {
        -webkit-appearance: none;
        -webkit-tap-highlight-color: transparent;
    }

    .thumb {
        pointer-events: none;
        position: absolute;
        height: 0;
        width: 200px;
        outline: none;
    }

    .thumb--zindex-3 {
        z-index: 3;
    }

    .thumb--zindex-4 {
        z-index: 4;
    }

    .thumb::-webkit-slider-thumb {
        background-color: var(--blue);
        filter: brightness(1.1);
        border: none;
        border-radius: 50%;
        cursor: pointer;
        height: 18px;
        width: 18px;
        margin-top: 4px;
        pointer-events: all;
        position: relative;
    }
`

type Props = {
    range: [number, number]
    step: number
    valueTransform?: (value: number) => string
    initialValues: [number, number]
    onSave: (values: [number, number]) => void
}

const DoubleSlider = ({ range, step, initialValues, onSave, valueTransform }: Props) => {
    const [f, s] = initialValues
    const [min, max] = range
    const [first, setFirst] = useState(f)
    const [second, setSecond] = useState(s)
    const tValue1 = valueTransform ? valueTransform(first) : first
    const tValue2 = valueTransform ? valueTransform(second) : second

    const handleSave = () => {
        onSave([first, second])
    }

    const handleChange = (val: number) => {
        if (val === 1)
            return (e: React.ChangeEvent<HTMLInputElement>) => {
                const value = Math.min(+e.target.value, second - step)
                setFirst(value)
                e.target.value = value.toString()
            }
        else
            return (e: React.ChangeEvent<HTMLInputElement>) => {
                const value = Math.max(+e.target.value, first + step)
                setSecond(value)
                e.target.value = value.toString()
            }
    }

    return (
        <DoubleSliderStyled left={getPercent(first, max - min)} width={getPercent(second - first, max - min)}>
            <div className="inputs">
                <input
                    type="range"
                    className="thumb thumb--zindex-3"
                    min={min}
                    max={max}
                    step={step}
                    value={first}
                    onChange={handleChange(1)}
                    onMouseUp={handleSave}
                />
                <input
                    type="range"
                    className="thumb thumb--zindex-4"
                    min={min}
                    max={max}
                    step={step}
                    value={second}
                    onChange={handleChange(2)}
                    onMouseUp={handleSave}
                />
            </div>
            <div className="slider">
                <div className="slider__track"></div>
                <div className="slider__range"></div>
            </div>
            <div className="values">
                <span>{tValue1}</span>
                <span>{tValue2}</span>
            </div>
        </DoubleSliderStyled>
    )
}

export default DoubleSlider
