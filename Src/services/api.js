import axios from 'axios'

export const API = axios.create({
    baseURL: 'http://localhost:8080',
    headers: { 'Content-Type': 'application/json' }
})

// token helpers
function getAccess() { return localStorage.getItem('access_token') }

function getRefresh() { return localStorage.getItem('refresh_token') }

API.interceptors.request.use((config) => {
    const token = getAccess()
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config
})

// refresh automático
let refreshing = null
API.interceptors.response.use(
    res => res,
    async(err) => {
        const original = err.config
        if (err.response && err.response.status === 401 && !original._retry) {
            const rt = getRefresh()
            if (!rt) return Promise.reject(err)
            original._retry = true
            try {
                refreshing = refreshing || axios.post('http://localhost:8080/auth/refresh', { refresh_token: rt })
                const { data } = await refreshing
                refreshing = null
                localStorage.setItem('access_token', data.access_token)
                original.headers.Authorization = `Bearer ${data.access_token}`
                return API(original)
            } catch (e) {
                refreshing = null
                localStorage.removeItem('access_token')
                localStorage.removeItem('refresh_token')
                window.location.href = '/login'
            }
        }
        return Promise.reject(err)
    }
)