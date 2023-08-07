import { Colors, IColorPalette } from '@shared/constants'
import React from 'react'
import Block from '@shared/ui/block'
import { Title } from '@shared/ui/title'
import ColorPlate from './color-plate'

const ColorsWidget = () => {
    return (
        <Block maxWidth="1200px" orientation="horizontal" height="fit-content">
            {Object.keys(Colors).map((color) => {
                const typedColor = color as keyof typeof Colors
                return (
                    <div key={color}>
                        <Title size={4}>{typedColor}</Title>
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
