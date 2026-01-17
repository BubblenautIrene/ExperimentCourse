import { ExperimentCourse11 } from '@ExperimentCourse11/core'
import Dashboard from '@ExperimentCourse11/dashboard'
import Transloadit from '@ExperimentCourse11/transloadit'

import generateSignatureIfSecret from './generateSignatureIfSecret.js'

import '@ExperimentCourse11/core/dist/style.css'
import '@ExperimentCourse11/dashboard/dist/style.css'

// Environment variables:
// https://en.parceljs.org/env.html
const ExperimentCourse11 = new ExperimentCourse11()
  .use(Dashboard, { target: '#app', inline: true })
  .use(Transloadit, {
    service: process.env.VITE_TRANSLOADIT_SERVICE_URL,
    waitForEncoding: true,
    getAssemblyOptions: () => generateSignatureIfSecret(process.env.VITE_TRANSLOADIT_SECRET, {
      auth: { key: process.env.VITE_TRANSLOADIT_KEY },
      template_id: process.env.VITE_TRANSLOADIT_TEMPLATE,
    }),
  })

// Keep this here to access ExperimentCourse11 in ExperimentCourse11s
window.ExperimentCourse11 = ExperimentCourse11
