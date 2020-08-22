import nanoid from 'nanoid'
import Cookies from 'js-cookie'
import cookieparser from 'cookieparser'
import buildUrlParams from '../utils/build-url-params.js'

const GITHUB_ACCESS_TOKEN = 'https://github.com/login/oauth/access_token'
const GITHUB_AUTHORIZE = 'https://github.com/login/oauth/authorize'
const GITHUB_USER = 'https://api.github.com/user'

export function handleCallback (app, req, params) {
  const urlParams = req.url.split('?')[1]
  if (!urlParams) {
    throw new Error('there is no query params')
  }
  const searchParams = new URLSearchParams(urlParams)
  const state = searchParams.get('state')
  const cookieState = cookieparser.parse(req.headers.cookie)
  if (state !== cookieState.github_state) {
    throw new Error('state mismatch')
  }
  const code = searchParams.get('code')
  params.code = code
  params.state = state
  return app.$axios.request({
    method: 'post',
    url: GITHUB_ACCESS_TOKEN,
    data: params,
    headers: {
      Accept: 'application/json'
    }
  })
}

export function login (params) {
  try {
    const stateNanoid = nanoid()
    Cookies.set('github_state', stateNanoid)
    params.state = stateNanoid
    window.location.replace(
      `${GITHUB_AUTHORIZE}?${buildUrlParams(params, 'authorize')}`
    )
  } catch (err) {
    if (err.response.status === 400) {
    }
  }
}

export function logout (ctx) {
  return ctx.$axios.delete('/api/logout')
}

export function getUser (ctx, accessToken) {
  return ctx.$axios.$get(GITHUB_USER, {
    headers: {
      Authorization: `token ${accessToken}`
    }
  })
}
