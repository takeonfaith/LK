import React, { useEffect } from 'react'
import { ImCheckmark } from 'react-icons/im'
import styled from 'styled-components'
import { popUpMessageModel } from '@entities/pop-up-message'
import { Loading } from '../loading'

type StyledProps = {
    isLoading: boolean
    completed: boolean
    isActive?: boolean
    isDone?: boolean
    repeatable?: boolean
    width?: string
    height?: string
    pulsing?: boolean
    background?: string
}

const SubmitButtonWrapper = styled.button<StyledProps>`
    position: relative;
    width: ${({ width }) => width ?? '100%'};
    padding: 10px;
    box-sizing: border-box;
    opacity: ${(props) => (props.isLoading ? 0.5 : 1)};
    color: #fff;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${({ height }) => height ?? '40px'};
    min-height: ${({ height }) => height ?? '40px'};
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    border: none;
    cursor: pointer;
    background: ${({ isDone, background, isActive }) =>
        isDone
            ? isActive
                ? 'var(--green)'
                : 'var(--greenTransparent)'
            : background ?? (isActive ? 'var(--blue)' : 'var(--blueTransparent)')};
    animation: ${({ pulsing }) => pulsing && '1s pulsing infinite'};

    @keyframes pulsing {
        0% {
            outline: 0px solid var(--blue);
        }
        100% {
            outline: 10px solid transparent;
        }
    }

    &:focus {
        outline: 4px solid var(--almostTransparentOpposite);
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }

    @keyframes button-animation-in {
        0% {
            opacity: 0;
            transform: scale(0.95);
        }
        50% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(0.95);
        }
    }

    @keyframes short-button-animation-in {
        0% {
            opacity: 0;
            transform: scale(0.95);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }

    @keyframes button-animation-out {
        0% {
            opacity: 0;
            transform: scale(0.95);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }

    .inner-button {
        z-index: 1;

        .inner-button-success {
            animation: ${({ repeatable }) =>
                repeatable ? 'button-animation-in 2s forwards' : 'short-button-animation-in 2s forwards'};
        }

        .inner-button-text {
            animation: button-animation-out 0.5s forwards;
        }
    }

    &::before {
        content: '';
        position: absolute;
        display: block;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: var(--green);
        width: ${(props) => (props.completed ? '2000px' : '0')};
        height: ${(props) => (props.completed ? '2000px' : '0')};
        border-radius: 100%;
        transition: 0.6s;
        z-index: 0;
    }

    .loading-circle {
        position: relative;
        transform: none;
        left: auto;
        top: auto;
        width: 30px;
        height: 30px;
    }

    @media (max-width: 1000px) {
        font-size: 0.8em;
        height: 36px;
    }
`

type Props = StyledProps & {
    text: string
    action: () => void
    background?: string
    completed: boolean
    setCompleted: (completed: boolean) => void
    buttonSuccessText?: string
    popUpSuccessMessage?: string
    popUpFailureMessage?: string
    isDone?: boolean
    alerts?: boolean
}

const SubmitButton = ({
    text,
    action,
    width,
    height,
    setCompleted,
    background,
    buttonSuccessText = 'Готово',
    popUpSuccessMessage = 'Успешно',
    popUpFailureMessage = 'Nope',
    pulsing,
    isDone = false,
    isActive = true,
    isLoading = false,
    completed = false,
    repeatable = true,
    alerts = true,
}: Props) => {
    useEffect(() => {
        if (completed && alerts) {
            popUpMessageModel.events.evokePopUpMessage({
                message: popUpSuccessMessage,
                type: 'success',
            })

            if (repeatable) {
                setTimeout(() => {
                    setCompleted(false)
                }, 2000)
            }
        }
    }, [completed, setCompleted])

    const handleAction = () => {
        if (isActive && !isDone && !isLoading) return action()

        alerts &&
            popUpMessageModel.events.evokePopUpMessage({
                message: popUpFailureMessage,
                type: 'failure',
            })
    }

    return (
        <SubmitButtonWrapper
            isLoading={isLoading}
            background={background}
            className="submit-button"
            completed={completed}
            isActive={isActive && !isDone && !completed}
            onClick={handleAction}
            isDone={isDone}
            width={width}
            height={height}
            repeatable={repeatable}
            tabIndex={!(isActive && !isDone) ? -1 : 0}
            pulsing={pulsing && !isDone}
        >
            <div className="inner-button">
                {completed ? (
                    <div className="inner-button-success">
                        <ImCheckmark /> {buttonSuccessText}
                    </div>
                ) : !isLoading ? (
                    <div className="inner-button-text">{text}</div>
                ) : (
                    <Loading />
                )}
            </div>
        </SubmitButtonWrapper>
    )
}

export default SubmitButton
