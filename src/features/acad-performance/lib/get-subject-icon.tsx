import normalizeString from '@shared/lib/normalize-string'
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
    HiOutlineBookOpen,
    HiOutlineBriefcase,
    HiOutlineCode,
    HiOutlineDatabase,
    HiOutlineDeviceMobile,
    HiOutlineEye,
    HiOutlineLibrary,
    HiOutlineLightBulb,
    HiOutlineLockClosed,
    HiOutlineOfficeBuilding,
    HiOutlinePlay,
    HiOutlinePresentationChartBar,
    HiOutlineSparkles,
    HiOutlineSpeakerphone,
    HiOutlineTranslate,
    HiOutlineUserGroup,
    HiOutlineVariable,
} from 'react-icons/hi'

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
            keys: ['компьют', 'алгоритм'],
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
    ]

    const matched = matchingKeys.find((k) => k.keys.find((e) => normalizedName.includes(e)))

    if (matched) {
        return matched.icon
    }

    return <HiOutlineBookOpen />
}
