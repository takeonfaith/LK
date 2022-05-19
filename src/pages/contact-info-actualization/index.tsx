import { ContactInfoActualization } from '@api/model'
import { contactInfoActualizationModel } from '@entities/contact-info-actualization'
import React from 'react'
import TemplateFormPage from 'widgets/template-form-page'
import getForm from './lib/get-form'

const ContactInfoActualizationPage = () => {
    return <TemplateFormPage<ContactInfoActualization> model={contactInfoActualizationModel} getForm={getForm} />
}

export default ContactInfoActualizationPage
