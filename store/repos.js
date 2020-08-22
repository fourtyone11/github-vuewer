const FETCH_STATUS = {
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR'
}
export const state = () => ({
  fetchReposStatus: FETCH_STATUS.LOADING,
  repositoryList: []
})

export const mutations = {
  setFetchStatus (state, status) {
    state.fetchReposStatus = status
  },
  setRepos (state, repos) {
    state.repositoryList = repos
  }
}

export const actions = {
  fetchRepos ({ commit, rootState }) {
    commit('setFetchStatus', FETCH_STATUS.LOADING)
    if (!rootState.auth.user) {
      commit('setFetchStatus', FETCH_STATUS.ERROR)
      return
    }
    this.$axios.get(rootState.auth.user.repos_url)
      .then((res) => {
        commit('setFetchStatus', FETCH_STATUS.SUCCESS)
        commit('setRepos', res.data)
      })
      .catch(() => commit('setFetchStatus', FETCH_STATUS.ERROR))
  }
}
