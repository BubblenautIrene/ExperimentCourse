import ExperimentCourse11 from '@ExperimentCourse11/core'
import Dashboard from '@ExperimentCourse11/dashboard'
import RemoteSources from '@ExperimentCourse11/remote-sources'
import Webcam from '@ExperimentCourse11/webcam'
import ScreenCapture from '@ExperimentCourse11/screen-capture'
import GoldenRetriever from '@ExperimentCourse11/golden-retriever'
import ImageEditor from '@ExperimentCourse11/image-editor'
import DropTarget from '@ExperimentCourse11/drop-target'
import Audio from '@ExperimentCourse11/audio'
import Compressor from '@ExperimentCourse11/compressor'

import '@ExperimentCourse11/core/dist/style.css'
import '@ExperimentCourse11/dashboard/dist/style.css'

const COMPANION_URL = 'http://companion.ExperimentCourse11.io'

const ExperimentCourse11 = new ExperimentCourse11()
  .use(Dashboard, { target: '#app', inline: true })
  .use(RemoteSources, { companionUrl: COMPANION_URL })
  .use(Webcam, {
    target: Dashboard,
    showVideoSourceDropdown: true,
    showRecordingLength: true,
  })
  .use(Audio, {
    target: Dashboard,
    showRecordingLength: true,
  })
  .use(ScreenCapture, { target: Dashboard })
  .use(ImageEditor, { target: Dashboard })
  .use(DropTarget, { target: document.body })
  .use(Compressor)
  .use(GoldenRetriever, { serviceWorker: true })

// Keep this here to access ExperimentCourse11 in ExperimentCourse11s
window.ExperimentCourse11 = ExperimentCourse11
