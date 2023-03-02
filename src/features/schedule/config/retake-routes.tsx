import React from 'react'
import { IRoute, IRoutes } from '@app/routes/general-routes'
import RETAKE_LINKS from './retake-links'
import RetakeModal from '../ui/molecules/retake-modal'
import {
    HiOutlineDesktopComputer,
    HiOutlineDocumentSearch,
    HiOutlineOfficeBuilding,
    HiOutlinePencilAlt,
    HiOutlinePrinter,
} from 'react-icons/hi'
import { FaRegCalendar, FaRegLightbulb } from 'react-icons/fa'
import { RiBarChartFill, RiFlaskLine } from 'react-icons/ri'
import { BiBookBookmark } from 'react-icons/bi'
import { FiTruck } from 'react-icons/fi'
import { TiBrush } from 'react-icons/ti'
import { MdCarRepair, MdEvStation } from 'react-icons/md'

type RetakeRouteRaw = Pick<IRoute, 'id' | 'title' | 'icon' | 'color'>

const retakeRoutesRaw: RetakeRouteRaw[] = [
    {
        id: 'feiu',
        title: 'ФЭИУ',
        icon: <RiBarChartFill />,
        color: 'lightGreen',
    },
    {
        id: 'fuigh',
        title: 'ФУИГХ',
        icon: <HiOutlineOfficeBuilding />,
        color: 'purple',
    },
    {
        id: 'fbk',
        title: 'ФБК',
        icon: <HiOutlinePencilAlt />,
        color: 'red',
    },
    {
        id: 'fhtib',
        title: 'ФХТИБ',
        icon: <RiFlaskLine />,
        color: 'orange',
    },
    {
        id: 'tf',
        title: 'ТФ',
        icon: <FiTruck />,
        color: 'green',
    },
    {
        id: 'fm',
        title: 'ФМ',
        icon: <MdCarRepair />,
        color: 'green',
    },
    {
        id: 'fit',
        title: 'ФИТ',
        icon: <HiOutlineDesktopComputer />,
        color: 'blue',
    },
    {
        id: 'pi',
        title: 'ПИ',
        icon: <HiOutlinePrinter />,
        color: 'pink',
    },
    {
        id: 'iidizh',
        title: 'ИИДИЖ',
        icon: <BiBookBookmark />,
        color: 'purple',
    },
    {
        id: 'igrik',
        title: 'ИГРИК',
        icon: <TiBrush />,
        color: 'yellow',
    },
    {
        id: 'pishe',
        title: 'ПИШЭ',
        icon: <MdEvStation />,
        color: 'lightGreen',
    },
    {
        id: 'cpd',
        title: 'ЦПД',
        icon: <FaRegLightbulb />,
        color: 'purple',
    },
    {
        id: 'nid',
        title: 'НИД (Аспиранты)',
        icon: <FaRegCalendar />,
        color: 'orange',
    },
    {
        id: 'nivk',
        title: 'НИВК (Аспиранты)',
        icon: <HiOutlineDocumentSearch />,
        color: 'darkBlue',
    },
]

const retakeRoutes: IRoutes = retakeRoutesRaw.reduce((routes: IRoutes, { id, ...rest }: RetakeRouteRaw) => {
    if (!RETAKE_LINKS[id]) {
        return { ...routes }
    }

    const { href, links, fullTitle } = RETAKE_LINKS[id]

    const path = href && !links.length ? href : ''

    const Component = links.length && !href ? () => RetakeModal({ links, fullTitle }) : () => null

    return { ...routes, [id]: { id, path, Component, isTemplate: false, ...rest } }
}, {} as IRoutes)

export default retakeRoutes
