const cookieparser = process.server ? require('cookieparser') : undefined
const GITHUB_USER = 'https://api.github.com/user'

export const actions = {
  async nuxtServerInit ({ commit }, { app, req }) {
    let user = null
    if (req && req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        user = await this.$axios.$get(GITHUB_USER, {
          headers: {
            Authorization: `token ${parsed.access_token}`
          }
        })
        app.$axios.setToken(parsed.access_token, 'Bearer')
      } catch (err) {
        commit('auth/setError', err)
      }
    }
    commit('auth/setUser', user)
  }
}
