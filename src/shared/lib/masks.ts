const groupMask = (value: string, prevValue?: string) => {
    if (value.length > 8) return value.substring(0, 8)
    if (value.length === 3 && prevValue?.length === 2) return value + '-'
    if (value.length === 3 && prevValue?.length === 4) return value.substring(0, 2)
    return value
}

const phoneMask = (e: React.ChangeEvent<HTMLInputElement>) => {
    const russianNumberBeginnings = ['7', '8', '9']
    const selectionStart = e.target.selectionStart
    let phoneInput = e.target.value.replace(/\D/g, '')
    let formattedPhone = ''

    if (!phoneInput.length) return ''

    if (e.target.value.length !== selectionStart) {
        if (/\D/g.test((e.nativeEvent as InputEvent).data ?? '')) {
            return phoneInput
        }
        return e.target.value
    }

    if (russianNumberBeginnings.indexOf(phoneInput[0]) > -1) {
        // russian number
        if (phoneInput[0] === '9') phoneInput = '7' + phoneInput
        const firstSymbols = phoneInput[0] === '8' ? '8' : '+7'
        formattedPhone = firstSymbols + ' '
        if (!!phoneInput.length) {
            formattedPhone += '(' + phoneInput.substring(1, 4)
        }
        if (phoneInput.length >= 5) {
            formattedPhone += ') ' + phoneInput.substring(4, 7)
        }
        if (phoneInput.length >= 8) {
            formattedPhone += '-' + phoneInput.substring(7, 9)
        }
        if (phoneInput.length >= 10) {
            formattedPhone += '-' + phoneInput.substring(9, 11)
        }
    } else {
        // not russian number
        formattedPhone = `+${phoneInput.substring(0, 16)}`
    }

    return formattedPhone
}

const Masks = {
    groupMask,
    phoneMask,
}

export default Masks
