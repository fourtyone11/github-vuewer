import cookieparser from 'cookieparser'
import { handleCallback } from '~/services/auth.js'
import { params } from '~/configuration'

export default async function ({ app, store, redirect, route, req }) {
  if (store.state.auth.user && route.path === '/login') {
    return redirect('/')
  } else if (process.server && !store.state.auth.user) {
    if (req.headers.cookie) {
      const accessToken = cookieparser.parse(req.headers.cookie).access_token
      if (accessToken) {
        return
      }
    }

    try {
      const res = await handleCallback(app, req, params)
      if (res.data.error === 'bad_verification_code') {
        app.store.dispatch('auth/setError', res.data.error)
        return
      }
      const token = res.data.access_token
      app.$cookies.set('access_token', token, {
        httpOnly: true
      })
      app.$axios.setToken(token, 'Bearer')
      await app.store.dispatch('auth/getUser', token)
      app.store.dispatch('auth/setError', null)
      redirect('/')
    } catch (e) {
      app.store.dispatch('auth/setError', e)
    }
  }
}
