import { getCertForm } from '@pages/medical-certificate/lib/cert-form'

export const listConfigCert = {
    kvdCert: getCertForm({
        config: {
            title: 'Справка из кожно-венерологического диспансера',
            issueDateFieldName: 'kvd_date_of_issue',
            organizationFieldName: 'kvd_organization',
            docsFieldName: 'kvd_docs',
        },
    }),

    fluorographyCert: getCertForm({
        config: {
            title: 'Флюорография',
            issueDateFieldName: 'fluorography_date_of_issue',
            organizationFieldName: 'fluorography_organization',
            docsFieldName: 'fluorography_docs',
        },
    }),

    vichRwCert: getCertForm({
        config: {
            title: 'Результаты лабораторного исследования на ВИЧ, RW',
            issueDateFieldName: 'vichrw_date_of_issue',
            organizationFieldName: 'vichrw_organization',
            docsFieldName: 'vichrw_docs',
        },
    }),

    graftCert: getCertForm({
        config: {
            title: 'Сертификат о профилактических прививках',
            issueDateFieldName: 'graft_date_of_issue',
            organizationFieldName: 'graft_organization',
            docsFieldName: 'graft_docs',
        },
    }),
}
