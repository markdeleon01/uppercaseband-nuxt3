import apiClient from '~/utils/apiClient'

export default {
  getMembers () {
    return apiClient.get('/members')
  }
}
