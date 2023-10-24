import Cookies from 'js-cookie'

const tokenKey = 'access_token_cookie'
const csrfTokenKey = 'csrf_access_token'

export function getToken() {
  return Cookies.get(tokenKey)
}
export function getCsrfTokenKey() {
  return Cookies.get(csrfTokenKey)
}

export function setToken(token) {
  return Cookies.set(tokenKey, token)
}

export function setCsrfTokenKey(token) {
  return Cookies.set(csrfTokenKey, token)
}

export function removeToken() {
  Cookies.remove(csrfTokenKey);
  Cookies.remove(tokenKey);
}
