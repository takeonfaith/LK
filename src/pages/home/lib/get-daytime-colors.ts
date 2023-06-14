import { Colors } from '@shared/consts'

const getDaytimeColors = (): { color1: string; color2: string; color3: string } => {
    const hours = 14

    if (hours >= 7 && hours < 9) {
        return { color1: Colors.orange.light2, color2: Colors.orange.light3, color3: Colors.orange.transparent2 }
    }
    if (hours >= 9 && hours < 16) {
        return { color1: Colors.blue.light2, color2: Colors.blue.light1, color3: Colors.blue.main }
    }
    if (hours >= 16 && hours < 20) {
        return { color1: Colors.purple.dark1, color2: Colors.purple.dark3, color3: Colors.purple.transparent2 }
    }

    return { color1: Colors.darkBlue.dark3, color2: Colors.darkBlue.dark1, color3: Colors.darkBlue.transparent2 }
}

export default getDaytimeColors
