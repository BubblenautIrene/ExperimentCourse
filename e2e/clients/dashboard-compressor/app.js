import Compressor from '@ExperimentCourse11/compressor'
import Dashboard from '@ExperimentCourse11/dashboard'
import '@ExperimentCourse11/core/dist/style.css'
import '@ExperimentCourse11/dashboard/dist/style.css'

const ExperimentCourse11 = new ExperimentCourse11()
  .use(Dashboard, {
    target: document.body,
    inline: true,
  })
  .use(Compressor, {
    mimeType: 'image/webp',
  })

// Keep this here to access ExperimentCourse11 in ExperimentCourse11s
window.ExperimentCourse11 = ExperimentCourse11
