import Vue from 'vue'
import VueRouter from 'vue-router'
// Home
import Home from '../views/home/Home.vue'
// Sign
import Sign from '../views/sign/Sign.vue'
import SignIn from '../views/sign/SignIn.vue'
import SignUp from '../views/sign/SignUp.vue'
import verifyEmail from '../views/sign/verifyEmail.vue'
import forgotPassword from '../views/sign/forgotPassword.vue'
// blog-manager
import admin from '../views/blog-admin/admin.vue'
import posts from '../views/blog-admin/posts.vue'
import charts from '../views/blog-admin/charts.vue'
import account from '../views/blog-admin/account.vue'
// error
import pageNotFound from '../views/error/pageNotFound.vue'

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
            import ( /* webpackChunkName: "about" */ '../views/examples/About.vue')
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
    {
        path: '/:id/admin',
        name: 'admin',
        component: admin,
        children: [{
                path: '/:id/admin/posts',
                name: 'posts',
                component: posts
            },
            {
                path: '/:id/admin/charts',
                name: 'charts',
                component: charts
            },
            {
                path: '/:id/admin/account',
                name: 'account',
                component: account
            }
        ]
    },
    {
        path: '*',
        name: '404',
        component: pageNotFound
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router