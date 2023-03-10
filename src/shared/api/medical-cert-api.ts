import getToken from '@shared/lib/token'
import { $api } from './config'
import { MedicalCert } from './model/medical-cert'

export const getMedicalCertForm = () => {
    return $api.get<MedicalCert>(`?getRequestMedicalCertificate&token=${getToken()}`)
}
