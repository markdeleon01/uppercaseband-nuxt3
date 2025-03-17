import DiscographyService from '@/services/DiscographyService.js'

export const namespaced = true

export const state = () => {
  return {
    releases: []
  }
}

export const mutations = {
  // mutations change the state directly
  SET_RELEASES (state, releases) {
    state.releases = releases
  }
}

export const actions = {
  // asynchronous call on mutations
  async fetchReleases ({ commit }) {
    const response = await DiscographyService.getReleases()
    commit('SET_RELEASES', response.data)
  }
}
