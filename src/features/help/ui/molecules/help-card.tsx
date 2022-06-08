import { Divider } from '@ui/divider'
import { Image } from '@ui/image'
import React from 'react'
import styled from 'styled-components'

const HelpCardWrapper = styled.div`
    min-width: 100%;
    min-height: 100%;
`

const HelpCard = () => {
    return (
        <HelpCardWrapper>
            <Image
                src="https://img.wallscloud.net/uploads/cache/2563221226/Windows-10-wallpaper_1497290-1024x576-MM-90.webp"
                alt=""
                loading={false}
                width={'100%'}
                height={'auto'}
                borderRadius={'var(--brLight)'}
            />
            <Divider />
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum natus, inventore exercitationem
                laboriosam vitae fugit praesentium recusandae consequuntur optio alias voluptatum, sequi a commodi
                sapiente, molestiae nulla neque asperiores veritatis.
            </p>
        </HelpCardWrapper>
    )
}

export default HelpCard
