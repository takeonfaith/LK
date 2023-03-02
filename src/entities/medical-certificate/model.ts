import { getMedicalCertForm } from '@shared/api/medical-cert-api'
import { createEffect, createEvent, restore, sample } from 'effector'
import { useStore } from 'effector-react'

const load = createEvent()

const loadFx = createEffect(async () => (await getMedicalCertForm()).data)

sample({ clock: load, target: loadFx })

const $medicalCert = restore(loadFx, null)

export const selectors = { useData: () => useStore($medicalCert) }

export const events = { load }
