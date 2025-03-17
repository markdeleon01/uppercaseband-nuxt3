import apiClient from '~/utils/apiClient'

export default {
  getEvents () {
    return apiClient.get('/events')
  }
}
