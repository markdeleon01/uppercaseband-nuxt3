import MemberService from '@/services/MemberService'

export const namespaced = true

export const state = () => {
  return {
    members: []
  }
}

export const mutations = {
  // mutations change the state directly
  SET_MEMBERS (state: { members }, members) {
    state.members = members
  }
}

export const actions = {
  // asynchronous call on mutations
  async fetchMembers ({ commit }) {
    const response = await MemberService.getMembers()
    commit('SET_MEMBERS', response.data)
  }
}
