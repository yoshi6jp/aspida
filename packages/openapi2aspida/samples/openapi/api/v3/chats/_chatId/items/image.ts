/* eslint-disable */
import * as Types from '../../../../../@types'

export type Methods = {
  post: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken

    resBody: {
      id: string
    }

    reqFormat: FormData

    reqBody?: {
      file: ArrayBuffer
      caption?: string
      headline?: string
      published?: boolean
      formattedText?: string
    }
  }
}

export default {
  post: () => ({ status: 200, resBody: { id: 'a' } })
}
