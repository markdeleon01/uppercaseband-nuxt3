import apiClient from '~/utils/apiClient'

export default {
  getReleases () {
    return apiClient.get('/discography')
  }
}
