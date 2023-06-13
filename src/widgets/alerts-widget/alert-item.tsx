import AlertModal from '@pages/alerts/ui/alert-modal'
import { Alert } from '@shared/api/model/alert'
import { Colors } from '@shared/consts'
import localizeDate from '@shared/lib/localize-date'
import DotSeparatedWords from '@shared/ui/dot-separated-words'
import Subtext from '@shared/ui/subtext'
import { Direction } from '@shared/ui/types'
import React from 'react'
import { BiNews } from 'react-icons/bi'
import styled from 'styled-components'
import { useModal } from 'widgets/modal/lib'
import getImageURLFromContent from './lib/get-image-url-from-content'
import getShortString from '@shared/lib/get-short-string'

const AlertItemStyled = styled.div<{ orientation: Direction }>`
    width: 100%;
    border-radius: calc(var(--brLight) - 3px);
    background: var(--form);
    box-shadow: var(--schedule-shadow);
    display: flex;
    flex-direction: ${({ orientation }) => (orientation === 'vertical' ? 'column' : 'row')};
    height: ${({ orientation }) => (orientation === 'vertical' ? '150px' : '90px')};
    overflow: hidden;
    cursor: pointer;

    &:hover {
        filter: brightness(0.98);
    }
`

const Image = styled.div<{ orientation: Direction }>`
    height: ${({ orientation }) => (orientation === 'vertical' ? '50px' : '90px')};
    width: ${({ orientation }) => (orientation === 'vertical' ? '50px' : '90px')};
    min-width: ${({ orientation }) => (orientation === 'vertical' ? '50px' : '90px')};
    min-height: ${({ orientation }) => (orientation === 'vertical' ? '50px' : '90px')};
    overflow: hidden;
    background: ${Colors.purple.transparent1};
    border-radius: ${({ orientation }) => (orientation === 'vertical' ? 'calc(var(--brLight) - 3px)' : '0')};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: ${({ orientation }) => (orientation === 'vertical' ? '12px' : '0')};
    margin-top: ${({ orientation }) => (orientation === 'vertical' ? '12px' : '0')};
    box-shadow: ${({ orientation }) => (orientation === 'vertical' ? '0 0 30px rgba(0, 0, 0, 0.101)' : 'none')};

    svg {
        width: 40%;
        height: 40%;
    }

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`

const AlertContent = styled.div`
    min-height: 90px;
    width: 100%;
    padding: 12px;
    display: flex;
    gap: 4px;
    flex-direction: column;
`

const AlertTitle = styled.div<{ orientation: Direction }>`
    font-weight: 500;
    width: ${({ orientation }) => (orientation === 'vertical' ? '100%' : '85%')};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`

const AlertText = styled.div`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 0.86rem;
    margin-bottom: 6px;
    height: 20px;
    opacity: 0.8;

    p {
        text-align: left;
    }

    strong {
        font-weight: 400;
    }

    img {
        display: none;
    }
`

type Props = {
    news: Alert
    orientation?: Direction
}

const AlertItem = ({ news, orientation = 'vertical' }: Props) => {
    const cover = getImageURLFromContent(news.content)
    const { open } = useModal()
    const handleOpenModal = () => open(<AlertModal alert={news} />, news.title)

    return (
        <AlertItemStyled onClick={handleOpenModal} orientation={orientation}>
            <Image orientation={orientation}>{cover ? <img src={cover} alt="" /> : <BiNews />}</Image>
            <AlertContent>
                <AlertTitle orientation={orientation}>{news.title}</AlertTitle>
                <AlertText>
                    <div dangerouslySetInnerHTML={{ __html: getShortString(news.content, 220) }} />
                </AlertText>
                <Subtext>
                    <DotSeparatedWords words={[localizeDate(news.date), news.time]} />
                </Subtext>
            </AlertContent>
        </AlertItemStyled>
    )
}

export default AlertItem
