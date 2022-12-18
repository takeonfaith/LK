import { popUpMessageModel } from '@entities/pop-up-message'
import { IInputArea } from '@ui/input-area/model'
import { applicationsModel } from '@entities/hr-applications'
import { getJwtToken, parseJwt } from '@entities/user/lib/jwt-token'

const SendHrFormDismissal = async (
    employeeId: string,
    inputAreas: IInputArea[],
    setLoading: (loading: boolean) => void,
    setCompleted: (loading: boolean) => void,
) => {
    setLoading(true)

    const form = inputAreas
        .map((itemForm) => {
            if (!Array.isArray(itemForm.data[0])) {
                return itemForm.data.map((l) => {
                    const obj = {}
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    if (!!l?.fieldName) obj[l?.fieldName ?? ''] = typeof l.value !== 'object' ? l?.value : l.value.title
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    if (l.type === 'multiselect') {
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        obj[l?.fieldName ?? ''] = JSON.stringify(l?.value.map((itemSelect) => itemSelect.title))
                    }

                    return obj
                })
            } else {
                const r = itemForm.data.map((c) => {
                    return Object.assign(
                        {},
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        ...c?.map((r) => {
                            const obj = {}
                            if (!!r?.fieldName)
                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                // @ts-ignore
                                obj[r?.fieldName] = !!r?.value?.title ? r?.value?.title : r?.value
                            return obj
                        }),
                    )
                })
                const obj = {} as any

                obj[employeeId] = JSON.stringify(r)

                return obj
            }
        })
        .flat()

    const result = Object.assign({}, ...form)
    let response
    try {
        const aaa = {
            guid: parseJwt(JSON.parse(getJwtToken() || '{}'))['IndividualGuid'],
            jobGuid: result.jobGuid,
            signingDate: new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString(),
            dateOfDismissal: result.last_day,
            isSendMail: result.get_tk == 'По почте',
            isRetirement: result.isRetirement == true ? true : false,
            address: result.get_tk_address,
            reason: result.reason,
        }
        response = await applicationsModel.effects.postApplicationFx(aaa)
        response = JSON.parse(response).dismissalResponse
        console.log(response)

        setLoading(false)
        setCompleted(true)
        if (response.isError) throw new Error()
        popUpMessageModel.events.evokePopUpMessage({
            message: `Форма отправлена успешно`,
            type: 'alert',
            time: 30000,
        })
    } catch (error) {
        console.log('in error')

        setLoading(false)

        popUpMessageModel.events.evokePopUpMessage({
            message: response.errorString,
            type: 'failure',
            time: 30000,
        })
    }
}

export default SendHrFormDismissal
