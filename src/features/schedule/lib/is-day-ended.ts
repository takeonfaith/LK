import { ISubject } from '@api/model'

const isDayEnded = (lessons: ISubject[]) => {
    if (lessons && lessons[lessons.length - 1]) {
        const [hours, minutes] = lessons[lessons.length - 1].timeInterval.split(' - ')[1].split(':')
        if (new Date().getHours() > +hours) return true
        else if (new Date().getHours() === +hours && new Date().getMinutes() > +minutes) return true
        else return false
    }
}

export default isDayEnded
