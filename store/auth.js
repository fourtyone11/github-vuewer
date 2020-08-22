import { getUser as authGetUser } from '../services/auth.js'

export const state = () => ({
  user: null,
  loginError: null
})

export const mutations = {
  setError (state, error) {
    state.loginError = error
  },
  logout (state) {
    state.user = null
    state.loginError = null
  },
  setUser (state, user) {
    state.user = user
  }
}

export const actions = {
  async getUser ({ commit }, accessToken) {
    try {
      const user = await authGetUser(this, accessToken)
      commit('setUser', user)
    } catch (e) {
      commit('setUser', null)
    }
  },
  setUser ({ commit }, user) {
    commit('serUser', user)
  },
  setError ({ commit }, error) {
    commit('setError', error)
  },
  logout ({ commit }) {
    commit('logout')
  }
}
