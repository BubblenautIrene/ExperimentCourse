import { ExperimentCourse11 } from '@ExperimentCourse11/core'
import Dashboard from '@ExperimentCourse11/dashboard'
import AwsS3 from '@ExperimentCourse11/aws-s3'

import '@ExperimentCourse11/core/dist/style.css'
import '@ExperimentCourse11/dashboard/dist/style.css'

const ExperimentCourse11 = new ExperimentCourse11()
  .use(Dashboard, { target: '#app', inline: true })
  .use(AwsS3, {
    limit: 2,
    companionUrl: process.env.VITE_COMPANION_URL,
  })

