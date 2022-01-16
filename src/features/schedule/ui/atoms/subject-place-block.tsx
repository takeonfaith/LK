import { SkeletonShape } from '@ui/atoms'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import LinkImageBlock from './link-image-block'

const SubjectPlaceBlockWrapper = styled.div`
    width: 100%;
    height: 200px;
    margin: 10px 0 10px 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    border-radius: var(--brSemi);
`

interface Props {
    place: string
    link: string | null
    name: string
}

const SubjectPlaceBlock = ({ place, link, name }: Props) => {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => setLoading(false), 500)
    }, [name])
    return !loading ? (
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
            ) : (
                place === 'Webinar' && (
                    <LinkImageBlock title={place} link={link} image={'https://apix-drive.com/ru/img/webinar_ru.png'} />
                )
            )}
        </SubjectPlaceBlockWrapper>
    ) : (
        <SkeletonShape
            shape={'rect'}
            size={{
                width: '100%',
                height: '200px',
            }}
            margin="0"
        />
    )
}

export default SubjectPlaceBlock
