import { getSubjectIcon } from '@features/acad-performance/lib/get-subject-icon'
import { Icon } from '@features/all-pages'
import { IColorPalette } from '@shared/constants'
import useTheme from '@shared/lib/hooks/use-theme'
import EventBackground from '@shared/ui/calendar/calendars/day/ui/event-background'
import React from 'react'
import styled from 'styled-components'

const BackgroundWrapper = styled.div<{
    textColor: string
    noPadding: boolean
    iconBackground: string
}>`
    width: 100%;
    height: 110px;
    position: relative;
    color: var(--text);
    margin-bottom: ${({ noPadding }) => (noPadding ? '0px' : '40px')};

    .icon {
        position: absolute;
        bottom: ${({ noPadding }) => (noPadding ? '-5px' : '-50px')};
        left: ${({ noPadding }) => (noPadding ? '-5px' : '16px')};
        background: ${({ iconBackground }) => iconBackground};
        transition: 0s;

        svg {
            color: ${({ textColor }) => textColor};
        }
        border: 5px solid var(--block-content);
    }
`

type Props = {
    subjectName: string
    color: IColorPalette
    noPadding: boolean
}

export const SubjectIconAndBackground = ({ subjectName, color, noPadding }: Props) => {
    const icon = getSubjectIcon(subjectName)

    const { theme } = useTheme()
    const textColor = theme === 'light' ? color.dark3 : color.light3
    const background = theme === 'light' ? color.light3 : color.dark3
    const iconBackground = theme === 'light' ? color.light3 : color.dark3

    return (
        <BackgroundWrapper noPadding={noPadding} textColor={textColor} iconBackground={iconBackground}>
            <EventBackground noPadding={noPadding} icon={icon} background={background} />
            <Icon color={color.main} size={70} borderRadius="19px">
                {icon}
            </Icon>
        </BackgroundWrapper>
    )
}
