import { API } from './api'

export const AuthService = {
    register: (p) => API.post('/auth/register', p).then(r => r.data),
    login: (p) => API.post('/auth/login', p).then(r => r.data),
    refresh: (refresh_token) => API.post('/auth/refresh', { refresh_token }).then(r => r.data),
    me: () => API.get('/auth/me').then(r => r.data),
    logout: (p) => API.post('/auth/logout', p).then(r => r.data),
}