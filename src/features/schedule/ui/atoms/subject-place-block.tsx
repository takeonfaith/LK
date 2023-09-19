import { MEDIA_QUERIES } from '@shared/constants'
import Flex from '@shared/ui/flex'
import { Loading } from '@ui/atoms'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import LinkImageBlock from './link-image-block'

const SubjectPlaceBlockWrapper = styled.div`
    ${MEDIA_QUERIES.isNotMobile} {
        width: 500px;
    }

    height: 200px;
    margin: 10px 0 10px 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    border-radius: 8px;
    background: var(--theme-2);
`

interface Props {
    place: string
    link: string | null | undefined
    name: string
}

const SubjectPlaceBlock = ({ place, link, name }: Props) => {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => setLoading(false), 500)
    }, [name])

    if (loading)
        return (
            <SubjectPlaceBlockWrapper>
                <Flex jc="center">
                    <Loading />
                </Flex>
            </SubjectPlaceBlockWrapper>
        )

    return (
        <SubjectPlaceBlockWrapper>
            {place === 'Webex' ? (
                <LinkImageBlock
                    title={place}
                    link={link}
                    image={
                        'https://lh3.googleusercontent.com/-IR3NTxu_EJY/YMB7bMtdDOI/AAAAAAAAAmA/57OhYSNULo0ICfc3Q4TWAoRM7ohUFLJmwCLcBGAsYHQ/s220-w220-h140-nd/220x140%2BCisco%2BWebex%25281%2529.png'
                    }
                />
            ) : place === 'Zoom' ? (
                <LinkImageBlock
                    title={place}
                    link={link}
                    image={'https://yogaworks.ru/wp-content/uploads/2020/04/zoom-banner-600x300-600x300.jpg'}
                />
            ) : place === 'Обучение LMS' ? (
                <LinkImageBlock
                    title={place}
                    link={link}
                    image={
                        'https://online.mospolytech.ru/pluginfile.php/1/theme_opentechnology/settings_setpolytech_header_backgroundimage/1638781183/01.jpg'
                    }
                />
            ) : place === 'Webinar' ? (
                <LinkImageBlock title={place} link={link} image={'https://apix-drive.com/ru/img/webinar_ru.png'} />
            ) : place === 'Прянишникова' ? (
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                    <a
                        href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps"
                        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}
                    >
                        Москва
                    </a>
                    <a
                        href="https://yandex.ru/maps/213/moscow/house/ulitsa_pryanishnikova_2a/Z04YcwNjTkAPQFtvfXRycntjbA==/?ll=37.545032%2C55.833931&utm_medium=mapframe&utm_source=maps&z=17"
                        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}
                    >
                        Улица Прянишникова, 2А на карте Москвы, ближайшее метро Коптево — Яндекс Карты
                    </a>
                    <iframe
                        src="https://yandex.ru/map-widget/v1/-/CCUBAPA0PC"
                        width="560"
                        height="400"
                        frameBorder="1"
                        allowFullScreen={true}
                        style={{ position: 'relative' }}
                    ></iframe>
                </div>
            ) : place === 'Автозаводская' ? (
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                    <a
                        href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps"
                        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}
                    >
                        Москва
                    </a>
                    <a
                        href="https://yandex.ru/maps/213/moscow/house/avtozavodskaya_ulitsa_16/Z04YcANlSEwBQFtvfXtxdX5hZA==/?ll=37.646696%2C55.704260&utm_medium=mapframe&utm_source=maps&z=18.17"
                        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}
                    >
                        Автозаводская улица, 16 — Яндекс Карты
                    </a>
                    <iframe
                        src="https://yandex.ru/map-widget/v1/-/CCUBAPsXDC"
                        width="560"
                        height="400"
                        frameBorder="1"
                        allowFullScreen={true}
                        style={{ position: 'relative' }}
                    ></iframe>
                </div>
            ) : place === 'Павла Корчагина' ? (
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                    <a
                        href="https://yandex.ru/maps/org/moskovskiy_politekhnicheskiy_universitet/1743307891/?utm_medium=mapframe&utm_source=maps"
                        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}
                    >
                        Московский Политехнический университет
                    </a>
                    <a
                        href="https://yandex.ru/maps/213/moscow/category/university_college/184106140/?utm_medium=mapframe&utm_source=maps"
                        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}
                    >
                        ВУЗ в Москве
                    </a>
                    <iframe
                        src="https://yandex.ru/map-widget/v1/-/CCUBAPtC9A"
                        width="560"
                        height="400"
                        frameBorder="1"
                        allowFullScreen={true}
                        style={{ position: 'relative' }}
                    ></iframe>
                </div>
            ) : place === 'Большая Семеновская' ? (
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                    <a
                        href="https://yandex.ru/maps/org/moskovskiy_politekhnicheskiy_universitet/1113152789/?utm_medium=mapframe&utm_source=maps"
                        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}
                    >
                        Московский политехнический университет
                    </a>
                    <iframe
                        src="https://yandex.ru/map-widget/v1/-/CCUBATAEkC"
                        width="560"
                        height="400"
                        frameBorder="1"
                        allowFullScreen={true}
                        style={{ position: 'relative' }}
                    ></iframe>
                </div>
            ) : (
                place === 'Михалковская ' && (
                    <div style={{ position: 'relative', overflow: 'hidden' }}>
                        <a
                            href="https://yandex.ru/maps/org/sportivny_klub_sektsiya/1699871922/?utm_medium=mapframe&utm_source=maps"
                            style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}
                        >
                            Спортивный клуб, секция
                        </a>
                        <iframe
                            src="https://yandex.ru/map-widget/v1/-/CCUBA-FspD"
                            width="560"
                            height="400"
                            frameBorder="1"
                            allowFullScreen={true}
                            style={{ position: 'relative' }}
                        ></iframe>
                    </div>
                )
            )}
        </SubjectPlaceBlockWrapper>
    )
}

export default SubjectPlaceBlock
