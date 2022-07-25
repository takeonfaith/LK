import { Colors } from '@consts'
import React from 'react'
import { FiPlus, FiX } from 'react-icons/fi'
import styled from 'styled-components'
import useFilterList from './lib/hooks/use-filter-list'

const Element = styled.div<{ color?: string; background?: string; remove?: boolean }>`
    padding: ${({ remove }) => (remove ? '0px' : '5px 10px')};
    background: ${({ background }) => background ?? Colors.blue.transparentAF};
    font-size: 0.7em;
    font-weight: 600;
    color: ${({ color }) => color ?? 'var(--reallyBlue)'};
    border-radius: var(--brLight);
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 26px;
    user-select: none;
    cursor: pointer;

    animation: ${({ remove }) =>
        remove ? 'element-removed 0.2s forwards normal' : 'element-added 0.2s forwards normal'};

    .element-text {
        display: block;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;
    }

    .remove {
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 15px;
        height: 15px;
        background: var(--theme);
        color: var(--blue);
        border-radius: 100%;

        svg {
            width: 10px;
            height: 10px;
        }
    }

    @keyframes element-added {
        0% {
            padding: 0;
            width: 0px;
            max-width: 0px;
            opacity: 0;
            visibility: hidden;
            margin-right: 0;
        }
        100% {
            padding: 5px 10px;
            width: 100px;
            max-width: 100px;
            opacity: 1;
            visibility: visible;
            margin-right: 5px;
        }
    }

    @keyframes element-removed {
        0% {
            padding: 5px 10px;
            width: 100px;
            max-width: 100px;
            opacity: 1;
            visibility: visible;
            margin-right: 5px;
        }
        100% {
            padding: 0;
            width: 0px;
            max-width: 0px;
            opacity: 0;
            visibility: hidden;
            margin-right: 0;
        }
    }
`

const AddedElementsListWrapper = styled.div<{ removeAll?: boolean; padding?: string }>`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    row-gap: 5px;
    transition: 0.2s;
    padding: ${({ padding }) => padding ?? '10px'};
    opacity: ${({ removeAll }) => (removeAll ? '0' : '1')};
    height: ${({ removeAll }) => (removeAll ? '0px' : '46px')};
    visibility: ${({ removeAll }) => (removeAll ? 'hidden' : 'visible')};
    transform: scale(${({ removeAll }) => (removeAll ? '0.95' : '1')})
        translate(${({ removeAll }) => (removeAll ? '-30px, 20px' : '0, 0')});
`

export interface FilterElement {
    id: string
    title: string
    color?: string
    background?: string
}

export type FilterElementList = {
    [key: string]: FilterElement
} | null

interface Props {
    list: FilterElementList
    onAddElement?: () => void
    onRemoveOne: (id: string) => void
    onRemoveAll?: () => void
    padding?: string
    setList: React.Dispatch<React.SetStateAction<FilterElementList>>
}

const AddedElementsList = ({ list, onAddElement, onRemoveAll, onRemoveOne, padding, setList }: Props) => {
    const listKeys = Object.keys(list ?? {})
    const { removeAll, removeOne, setRemoveAll, setRemoveOne } = useFilterList(listKeys, setList)

    if (!listKeys.length) return null

    return (
        <AddedElementsListWrapper removeAll={removeAll || closed} padding={padding}>
            {!!onAddElement && (
                <Element onClick={onAddElement} background={'var(--reallyBlue)'} color="#fff">
                    <FiPlus />
                    Добавить
                </Element>
            )}
            {Object.values(list ?? {}).map((el) => {
                return (
                    <Element key={el.id} background={el.background} remove={removeOne === el.id}>
                        <div className="element-text">{el.title}</div>
                        <div
                            className="remove"
                            onClick={() => {
                                if (listKeys.length === 1) {
                                    setRemoveAll(true)
                                    onRemoveAll?.()
                                } else {
                                    setRemoveOne(el.id)

                                    onRemoveOne(el.id)
                                }
                            }}
                        >
                            <FiX />
                        </div>
                    </Element>
                )
            })}
            {listKeys.length && !!onRemoveAll && (
                <Element
                    background={'var(--reallyBlue)'}
                    color="#fff"
                    onClick={() => {
                        onRemoveAll()
                        setRemoveAll(true)
                    }}
                >
                    <div className="element-text">Убрать все</div>
                </Element>
            )}
        </AddedElementsListWrapper>
    )
}

export default AddedElementsList
