export default function authHeaders() {
  return {
    'client': localStorage.getItem('client'),
    'uid': localStorage.getItem('uid'),
    'access-token': localStorage.getItem('access-token'),
    'token-type': localStorage.getItem('token-type'),
    'Content-Type': 'application/json'
  }
}
