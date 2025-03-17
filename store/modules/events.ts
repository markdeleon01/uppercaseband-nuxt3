import EventService from '@/services/EventService.js'

export const namespaced = true

export const state = () => {
  return {
    events: []
  }
}

export const mutations = {
  // mutations change the state directly
  SET_EVENTS (state, events) {
    state.events = events
  }
}

export const actions = {
  // asynchronous call on mutations
  async fetchEvents ({ commit }) {
    const response = await EventService.getEvents()
    commit('SET_EVENTS', response.data)
  }
}
