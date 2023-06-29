import AlertModal from '@pages/alerts/ui/alert-modal'
import { Alert } from '@shared/api/model/alert'
import getShortString from '@shared/lib/get-short-string'
import localizeDate from '@shared/lib/localize-date'
import DotSeparatedWords from '@shared/ui/dot-separated-words'
import Subtext from '@shared/ui/subtext'
import { Direction } from '@shared/ui/types'
import React from 'react'
import { BiNews } from 'react-icons/bi'
import { useModal } from 'widgets/modal/lib'
import getImageURLFromContent from './lib/get-image-url-from-content'
import { AlertContent, AlertItemBadge, AlertItemStyled, AlertText, AlertTitle, Image } from './styles'

type Props = {
    news: Alert
    orientation?: Direction
    isNew?: boolean
}

const AlertItem = ({ news, orientation = 'vertical', isNew = false }: Props) => {
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
            <AlertItemBadge visible={isNew}>New</AlertItemBadge>
        </AlertItemStyled>
    )
}

export default AlertItem
