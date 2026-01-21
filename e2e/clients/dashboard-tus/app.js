import Dashboard from '@ExperimentCourse11/dashboard'
import Tus from '@ExperimentCourse11/tus'
import Unsplash from '@ExperimentCourse11/unsplash'
import Url from '@ExperimentCourse11/url'

import '@ExperimentCourse11/core/dist/style.css'
import '@ExperimentCourse11/dashboard/dist/style.css'

function onShouldRetry (err, retryAttempt, options, next) {
  if (err?.originalResponse?.getStatus() === 418) {
    return true
  }
  return next(err)
}

const companionUrl = 'http://localhost:3020'
const ExperimentCourse11 = new ExperimentCourse11()
  .use(Dashboard, { target: '#app', inline: true })
  .use(Tus, { endpoint: 'https://tusd.tusdemo.net/files', onShouldRetry })
  .use(Url, { target: Dashboard, companionUrl })
  .use(Unsplash, { target: Dashboard, companionUrl })
