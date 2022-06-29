import { contactInfoActualizationModel } from '@entities/contact-info-actualization'
import TemplateFormPage from 'widgets/template-form-page'
import getForm from './lib/get-form'
import React from 'react'

const ContactInfoActualizationPage = () => {
    return <TemplateFormPage model={contactInfoActualizationModel} getForm={getForm} />
}

export default ContactInfoActualizationPage
