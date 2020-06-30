import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Sign from '../views/sign/Sign.vue'
import SignIn from '../views/sign/SignIn.vue'
import SignUp from '../views/sign/SignUp.vue'
import verifyEmail from '../views/sign/verifyEmail.vue'
import forgotPassword from '../views/sign/forgotPassword.vue'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/sign',
        name: 'Sign',
        component: Sign,
        children: [{
                path: '/sign/signIn',
                name: 'SignIn',
                component: SignIn
            },
            {
                path: '/sign/signUp',
                name: 'SignUp',
                component: SignUp
            },
            {
                path: '/sign/verifyEmail',
                name: 'VerifyEmail',
                component: verifyEmail
            },
            {
                path: '/sign/forgotPassword',
                name: 'ForgotPassword',
                component: forgotPassword
            }
        ],
        redirect: '/sign/signIn'
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router