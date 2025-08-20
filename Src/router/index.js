import { createRouter, createWebHistory } from 'vue-router'

// ===== Views =====
import ConsumptionForm from '../views/Consumptions/consumptionForm.vue'
import TariffsList from '../views/Tariffs/TariffsList.vue'
import TariffForm from '../views/Tariffs/TariffForm.vue'
import TariffDetails from '../views/Tariffs/TariffDetails.vue'

// ===== Lazy views =====
const Home = () =>
    import ('../views/Home.vue')
const Login = () =>
    import ('../views/Login.vue')
const Register = () =>
    import ('../views/Register.vue')

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    scrollBehavior() {
        return { top: 0 }
    },
    routes: [
        // Público
        { path: '/login', name: 'login', component: Login, meta: { public: true } },
        { path: '/register', name: 'register', component: Register, meta: { public: true } },

        // Home
        { path: '/', name: 'home', component: Home },

        // Fallback
        { path: '/:pathMatch(.*)*', redirect: '/' }
    ]
})

// Guard simples
router.beforeEach((to, _from, next) => {
    const isPublic = to.meta.public || false
    const token = localStorage.getItem('access_token')
    if (!isPublic && !token) return next({ name: 'login' })
    next()
})

export default router