import { Colors, IColorPalette } from '@shared/consts'
import React from 'react'
import Block from '@shared/ui/block'
import { Title } from '@shared/ui/title'
import ColorPlate from './color-plate'

const ColorsWidget = () => {
    return (
        <Block maxWidth="750px" orientation="vertical" height="fit-content">
            {Object.keys(Colors).map((color) => {
                const typedColor = color as keyof typeof Colors
                return (
                    // eslint-disable-next-line react/jsx-key
                    <div style={{ margin: '50px 0' }}>
                        <Title>{typedColor}</Title>
                        {Object.keys(Colors[typedColor]).map((shade) => {
                            return (
                                <ColorPlate color={Colors[typedColor][shade as keyof IColorPalette]} key={shade}>
                                    {shade}
                                </ColorPlate>
                            )
                        })}
                    </div>
                )
            })}
        </Block>
    )
}

export default ColorsWidget
