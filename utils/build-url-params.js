const authorizeRegex = /^(client_id|redirect_uri|login|scope|state|allow_signup)$/
const accessTokenRegex = /^(client_id|client_secret|code|redirect_uri|state)$/

export default function buildUrlParams (params, stage) {
  let res = ''
  if (stage === 'authorize') {
    for (const [k, v] of Object.entries(params)) {
      if (authorizeRegex.test(k)) {
        res += `${k}=${v}&`
      }
    }
    res = res.substring(0, res.length - 1)
  } else if (stage === 'access_token') {
    for (const [k, v] of Object.entries(params)) {
      if (accessTokenRegex.test(k)) {
        res += `${k}=${v}&`
      }
    }
    res = res.substring(0, res.length - 1)
  }
  return res
}
