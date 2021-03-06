/* eslint-disable */
import * as Types from '../../../@types'

export type Methods = {
  get: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationTokenRequired

    query: {
      search: string
      offset?: number
    }

    resBody: {
      count: number
      offset?: number
      data: {
        email: string
        id: number
        initials: string
        role: string
        roleScope: string
        screenName: string
      }[]
    }
  }
}

export default {
  get: () => ({ status: 200, resBody: { count: 1, offset: 1, data: [{ email: 'a', id: 1, initials: 'a', role: 'a', roleScope: 'a', screenName: 'a' }] } })
}
