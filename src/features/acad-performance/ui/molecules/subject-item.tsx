import { AcadPerformance } from '@api/model/acad-performance'
import findProgressBarColor from '@features/acad-performance/lib/find-progress-bar-color'
import { Icon } from '@features/all-pages'
import { GradeByScore } from '@shared/constants'
import normalizeString from '@shared/lib/normalize-string'
import DotSeparatedWords from '@shared/ui/dot-separated-words'
import Flex from '@shared/ui/flex'
import Subtext from '@shared/ui/subtext'
import getShortName from '@utils/get-short-name'
import localizeDate from '@utils/localize-date'
import React from 'react'
import { BiRuble } from 'react-icons/bi'
import {
    FiCircle,
    FiCommand,
    FiCpu,
    FiDribbble,
    FiGitBranch,
    FiHash,
    FiLayers,
    FiLifeBuoy,
    FiPrinter,
} from 'react-icons/fi'
import {
    HiOutlineAcademicCap,
    HiOutlineBadgeCheck,
    HiOutlineBeaker,
    HiOutlineBookOpen,
    HiOutlineBriefcase,
    HiOutlineCalculator,
    HiOutlineCode,
    HiOutlineCog,
    HiOutlineCube,
    HiOutlineDatabase,
    HiOutlineDeviceMobile,
    HiOutlineEye,
    HiOutlineFlag,
    HiOutlineGlobe,
    HiOutlineLibrary,
    HiOutlineLightBulb,
    HiOutlineLightningBolt,
    HiOutlineLockClosed,
    HiOutlineOfficeBuilding,
    HiOutlinePlay,
    HiOutlinePlusCircle,
    HiOutlinePresentationChartBar,
    HiOutlineRefresh,
    HiOutlineShieldCheck,
    HiOutlineSparkles,
    HiOutlineSpeakerphone,
    HiOutlineTranslate,
    HiOutlineUserGroup,
    HiOutlineVariable,
} from 'react-icons/hi'
import styled from 'styled-components'
import { useModal } from 'widgets'
import { SubjectModal } from '.'
import { SubjectCheker } from '../atoms'

interface Props {
    item: AcadPerformance
    number: number
    type: string
}

const Wrap = styled.div<{ isGraded: boolean }>`
    width: 100%;
    display: flex;
    min-height: 60px;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;
    box-sizing: border-box;
    cursor: pointer;
    opacity: ${({ isGraded }) => (isGraded ? 1 : 0.4)};
`

const Name = styled.div`
    display: flex;
    margin-right: 10px;
    font-weight: 500;
    hyphens: auto;

    @media (max-width: 1000px) {
        min-width: 0px;
    }
`

// export const GradeScore = styled.div<{ grade: keyof IGrade }>`
//     display: none;

//     @media (max-width: 1000px) {
//         display: block;
//         font-weight: 600;
//         color: ${({ grade }) => findProgressBarColor(grade)};
//     }
// `

const Grade = styled.strong<{ color: string }>`
    color: ${({ color }) => color};
    font-weight: 600;
    width: 30px;
    display: flex;
    justify-content: flex-end;
`

export const getSubjectIcon = (name: string) => {
    const normalizedName = normalizeString(name)
    const matchingKeys = [
        {
            keys: ['распознаван'],
            icon: <HiOutlineEye />,
        },
        {
            keys: ['принт'],
            icon: <FiPrinter />,
        },
        {
            keys: ['жизнед'],
            icon: <FiLifeBuoy />,
        },
        {
            keys: ['истор'],
            icon: <HiOutlineLibrary />,
        },
        {
            keys: ['информат'],
            icon: <FiHash />,
        },
        {
            keys: ['мобильн'],
            icon: <HiOutlineDeviceMobile />,
        },
        {
            keys: ['безопасн'],
            icon: <HiOutlineLockClosed />,
        },
        {
            keys: ['автоматиз'],
            icon: <HiOutlinePlay />,
        },
        {
            keys: ['обработ'],
            icon: <FiLayers />,
        },
        {
            keys: ['операционн'],
            icon: <FiCommand />,
        },
        {
            keys: ['эконом'],
            icon: <BiRuble />,
        },
        {
            keys: ['информацион', 'программир'],
            icon: <HiOutlineCode />,
        },
        {
            keys: ['анализ'],
            icon: <HiOutlinePresentationChartBar />,
        },
        {
            keys: ['компьют', 'алгоритм', 'электрон'],
            icon: <FiCpu />,
        },
        {
            keys: ['сети', 'сетей'],
            icon: <FiGitBranch />,
        },
        {
            keys: ['матем'],
            icon: <HiOutlineVariable />,
        },
        {
            keys: ['философ'],
            icon: <FiCircle />,
        },
        {
            keys: ['данны'],
            icon: <HiOutlineDatabase />,
        },
        {
            keys: ['язык'],
            icon: <HiOutlineTranslate />,
        },
        {
            keys: ['спорт'],
            icon: <FiDribbble />,
        },
        {
            keys: ['проектная'],
            icon: <HiOutlineLightBulb />,
        },
        {
            keys: ['интеллект'],
            icon: <HiOutlineSparkles />,
        },
        {
            keys: ['практика'],
            icon: <HiOutlineOfficeBuilding />,
        },
        {
            keys: ['предприним'],
            icon: <HiOutlineBriefcase />,
        },
        {
            keys: ['коммуникац'],
            icon: <HiOutlineSpeakerphone />,
        },
        {
            keys: ['управлени'],
            icon: <HiOutlineUserGroup />,
        },
        {
            keys: ['научн'],
            icon: <HiOutlineAcademicCap />,
        },
        {
            keys: ['вкр', 'итоговая', 'аттестация'],
            icon: <HiOutlineFlag />,
        },
        {
            keys: ['переработ'],
            icon: <HiOutlineRefresh />,
        },
        {
            keys: ['машин', 'инжен'],
            icon: <HiOutlineCog />,
        },
        {
            keys: ['проектир', 'расчет'],
            icon: <HiOutlineCalculator />,
        },
        {
            keys: ['производ'],
            icon: <HiOutlinePlusCircle />,
        },
        {
            keys: ['эколог'],
            icon: <HiOutlineGlobe />,
        },
        {
            keys: ['защит'],
            icon: <HiOutlineShieldCheck />,
        },
        {
            keys: ['хими'],
            icon: <HiOutlineBeaker />,
        },
        {
            keys: ['патент'],
            icon: <HiOutlineBadgeCheck />,
        },
        {
            keys: ['материал'],
            icon: <HiOutlineCube />,
        },
        {
            keys: ['физик'],
            icon: <HiOutlineLightningBolt />,
        },
    ]

    const matched = matchingKeys.find((k) => k.keys.find((e) => normalizedName.includes(e)))

    if (matched) {
        return matched.icon
    }

    return <HiOutlineBookOpen />
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SubjectItem = ({ item, number, type }: Props) => {
    const { open } = useModal()
    const { name, grade } = item

    // const grade = 'Удовлетворительно'

    const handleOpen = () => item.grade && open(<SubjectModal item={item} />, item.name)

    return (
        <Wrap onClick={handleOpen} isGraded={!!item.grade}>
            <Flex gap="16px">
                <Icon color={findProgressBarColor(grade)} borderRadius="9px">
                    {getSubjectIcon(name)}
                </Icon>
                <Flex d="column" ai="flex-start" gap="4px">
                    <Name>{name}</Name>
                    <Subtext>
                        <DotSeparatedWords words={[getShortName(item.teacher), localizeDate(item.exam_date)]} />
                    </Subtext>
                </Flex>
            </Flex>
            <Grade color={findProgressBarColor(grade)}>
                {type === 'Зачет' ? <SubjectCheker grade={grade} /> : grade && GradeByScore[grade]}
            </Grade>
        </Wrap>
    )
}

export default SubjectItem
