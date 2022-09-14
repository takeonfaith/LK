import { CenterPage, Error, FormBlock, Wrapper } from '@ui/atoms'
import GoBackButton from '@ui/go-back-button'
import { IInputArea } from '@ui/input-area/model'
import { useEffect, useState } from 'react'
import TemplateForm, { TemplateFormProps } from 'widgets/template-form'
import React from 'react'

type Props<T extends { last_update?: string }> = TemplateFormProps<T> & {
    pageAvailability?: {
        isAvailable: boolean
        text?: string
    }
    goBack?: string
    formId?: string
}

const TemplateFormPage = <T extends { last_update?: string }>({
    model,
    getForm,
    successMessage,
    goBack,
    pageAvailability,
    isAvailableToSend = true,
    repeatable = true,
    formId,
}: Props<T>) => {
    const { data, error } = model.selectors.useForm()
    const [form, setForm] = useState<IInputArea | null>(null)

    if ((!!pageAvailability && !pageAvailability?.isAvailable) ?? false) {
        return <Error text={pageAvailability?.text ?? 'Вам не доступен этот раздел'} />
    }

    useEffect(() => {
        if (!!data) {
            setForm(getForm(data))
        }
    }, [data])

    return (
        <Wrapper load={() => model.effects.getFormFx()} error={error} data={form}>
            <CenterPage>
                {!!form && !!setForm && (
                    <FormBlock>
                        <GoBackButton text={goBack} visible={!!goBack} />
                        <TemplateForm
                            model={model}
                            successMessage={successMessage}
                            isAvailableToSend={isAvailableToSend}
                            repeatable={repeatable}
                            getForm={getForm}
                            outerForm={form}
                            formId={formId}
                        />
                    </FormBlock>
                )}
            </CenterPage>
        </Wrapper>
    )
}

export default TemplateFormPage
