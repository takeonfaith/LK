import normalizeString from '@shared/lib/normalize-string'

const englishToRussianKeyboard = (text: string) => {
    const letters = {
        a: 'ф',
        b: 'и',
        c: 'с',
        d: 'в',
        e: 'у',
        f: 'а',
        g: 'п',
        h: 'р',
        i: 'ш',
        j: 'о',
        k: 'л',
        l: 'д',
        m: 'ь',
        n: 'т',
        o: 'щ',
        p: 'з',
        q: 'й',
        r: 'к',
        s: 'ы',
        t: 'е',
        u: 'г',
        v: 'м',
        w: 'ц',
        x: 'ч',
        y: 'н',
        z: 'я',
        '[': 'х',
        '{': 'х',
        ']': 'ъ',
        '}': 'ъ',
        "'": 'э',
        ';': 'ж',
        ',': 'б',
        '.': 'ю',
    }

    let finalString = ''
    for (let i = 0; i < text.length; i++) {
        const letter = normalizeString(text.charAt(i), false) as keyof typeof letters
        const element = letters[letter] ? (i === 0 ? letters[letter].toUpperCase() : letters[letter]) : letter
        finalString += element
    }

    return finalString
}

export default englishToRussianKeyboard
