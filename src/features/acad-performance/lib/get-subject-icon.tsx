import normalizeString from '@shared/lib/normalize-string'
import React from 'react'
import { BiDice6, BiRuble } from 'react-icons/bi'
import {
    FiBox,
    FiChrome,
    FiCircle,
    FiCommand,
    FiCpu,
    FiDribbble,
    FiGitBranch,
    FiHash,
    FiInfo,
    FiLayers,
    FiLifeBuoy,
    FiPrinter,
} from 'react-icons/fi'
import { LuGamepad } from 'react-icons/lu'
import {
    HiOutlineAcademicCap,
    HiOutlineArrowNarrowRight,
    HiOutlineBadgeCheck,
    HiOutlineBeaker,
    HiOutlineBookOpen,
    HiOutlineBriefcase,
    HiOutlineCalculator,
    HiOutlineClock,
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
    HiOutlinePresentationChartBar,
    HiOutlinePresentationChartLine,
    HiOutlineRefresh,
    HiOutlineShieldCheck,
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
            keys: ['химич'],
            icon: <HiOutlineBeaker />,
        },
        {
            keys: ['игр'],
            icon: <LuGamepad />,
        },
        {
            keys: ['жизнед'],
            icon: <FiLifeBuoy />,
        },
        {
            keys: ['web'],
            icon: <FiChrome />,
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
            keys: ['информации'],
            icon: <FiInfo />,
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
            keys: ['линейн'],
            icon: <HiOutlineArrowNarrowRight />,
        },
        {
            keys: ['обработ'],
            icon: <FiLayers />,
        },
        {
            keys: ['презентац'],
            icon: <HiOutlinePresentationChartLine />,
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
            keys: ['информацион', 'программир', 'сайт'],
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
            keys: ['вероятн'],
            icon: <BiDice6 />,
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
            keys: ['спорт', 'физичес'],
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
            keys: ['научн'],
            icon: <HiOutlineAcademicCap />,
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
            icon: <FiBox />,
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
        {
            keys: ['тайм'],
            icon: <HiOutlineClock />,
        },
        {
            keys: ['практика'],
            icon: <HiOutlineOfficeBuilding />,
        },
    ]

    const matched = matchingKeys.find((k) => k.keys.find((e) => normalizedName.includes(e)))

    if (matched) {
        return matched.icon
    }

    return <HiOutlineBookOpen />
}
