import Dashboard from '@ExperimentCourse11/dashboard'
import AwsS3Multipart from '@ExperimentCourse11/aws-s3-multipart'

import '@ExperimentCourse11/core/dist/style.css'
import '@ExperimentCourse11/dashboard/dist/style.css'

//#TODO ExperimentCourse11s
const ExperimentCourse11 = new ExperimentCourse11()
  .use(Dashboard, { target: '#app', inline: true })
  .use(AwsS3Multipart, {
    limit: 2,
    companionUrl: process.env.VITE_COMPANION_URL,
    // This way we can ExperimentCourse11 that the user provided API still works
    async prepareUploadParts (file, { uploadId, key, parts, signal }) {
      const { number: partNumber, chunk: body } = parts[0]
      const plugin = ExperimentCourse11.getPlugin('AwsS3Multipart')
      const { url } = await plugin.signPart(file, { uploadId, key, partNumber, body, signal })
      return { presignedUrls: { [partNumber]: url } }
    },
  })

// Keep this here to access ExperimentCourse11 in ExperimentCourse11s
window.ExperimentCourse11 = ExperimentCourse11
