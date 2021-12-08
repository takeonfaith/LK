export default createFullName

interface Props {
    name: string
    surname: string
    patronymic: string
}

function createFullName({ name, surname, patronymic }: Props): string {
    return `${surname} ${name} ${patronymic}`
}
