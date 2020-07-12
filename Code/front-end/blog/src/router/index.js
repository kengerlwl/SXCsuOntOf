import Vue from 'vue'
import VueRouter from 'vue-router'
// Home
import Home from '../views/home/Home.vue'
// // Sign
// import Sign from '../views/sign/Sign.vue'
// import SignIn from '../views/sign/SignIn.vue'
// import SignUp from '../views/sign/SignUp.vue'
// import verifyEmail from '../views/sign/verifyEmail.vue'
// import forgotPassword from '../views/sign/forgotPassword.vue'
// // blog-manager
// import admin from '../views/blog-admin/admin.vue'
// import posts from '../views/blog-admin/posts.vue'
// import charts from '../views/blog-admin/charts.vue'
// import account from '../views/blog-admin/account.vue'
// // news
// import news from '../views/news/news.vue'
// // error
// import pageNotFound from '../views/error/pageNotFound.vue'

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
        component: () =>
            import ( /* webpackChunkName: "Sign" */ '../views/sign/Sign.vue'),
        children: [{
                path: '/sign/signIn',
                name: 'SignIn',
                component: () =>
                    import ( /* webpackChunkName: "SignIn" */ '../views/sign/SignIn.vue')
            },
            {
                path: '/sign/signUp',
                name: 'SignUp',
                component: () =>
                    import ( /* webpackChunkName: "SignUp" */ '../views/sign/SignUp.vue')
            },
            {
                path: '/sign/verifyEmail',
                name: 'VerifyEmail',
                component: () =>
                    import ( /* webpackChunkName: "VerifyEmail" */ '../views/sign/verifyEmail.vue')
            },
            {
                path: '/sign/forgotPassword',
                name: 'ForgotPassword',
                component: () =>
                    import ( /* webpackChunkName: "ForgotPassword" */ '../views/sign/forgotPassword.vue')
            }
        ],
        redirect: '/sign/signIn'
    },
    {
        path: '/:id/admin',
        name: 'admin',
        component: () =>
            import ( /* webpackChunkName: "admin" */ '../views/blog-admin/admin.vue'),
        children: [{
                path: '/:id/admin/posts',
                name: 'posts',
                component: () =>
                    import ( /* webpackChunkName: "posts" */ '../views/blog-admin/posts.vue')
            },
            {
                path: '/:id/admin/charts',
                name: 'charts',
                component: () =>
                    import ( /* webpackChunkName: "charts" */ '../views/blog-admin/charts.vue')
            },
            {
                path: '/:id/admin/collect',
                name: 'collect',
                component: () =>
                    import ( /* webpackChunkName: "collect" */ '../views/blog-admin/collect.vue')
            },
            {
                path: '/:id/admin/account',
                name: 'account',
                component: () =>
                    import ( /* webpackChunkName: "account" */ '../views/blog-admin/account.vue')
            }
        ],
        redirect: '/:id/admin/charts'
    },
    {
        path: '/:id/admin/posts/post_edit',
        name: 'post_edit',
        component: () =>
            import ( /* webpackChunkName: "post_edit" */ '../views/blog-admin/edit.vue')
    },
    {
        path: '/:id/blog',
        name: 'user_blog',
        redirect: '/:id/blog/home'
    },
    {
        path: '/:id/blog/home',
        name: 'user_blog_home',
        component: () =>
            import ( /* webpackChunkName: "user_blog_home" */ '../views/blog-view/home.vue'),
    },
    {
        path: '/:id/blog/read',
        name: 'user_blog_read',
        component: () =>
            import ( /* webpackChunkName: "user_blog_read" */ '../views/blog-view/read.vue'),
    },
    {
        path: '/:id/blog/about',
        name: 'user_blog_about',
        component: () =>
            import ( /* webpackChunkName: "user_blog_about" */ '../views/blog-view/about.vue'),
    },
    {
        path: '/news',
        name: 'news',
        component: () =>
            import ( /* webpackChunkName: "news" */ '../views/news/news.vue'),
        children: [{
                path: '/news/school',
                name: 'school',
                component: () =>
                    import ( /* webpackChunkName: "school" */ '../views/news/school.vue')
            },
            {
                path: '/news/game',
                name: 'game',
                component: () =>
                    import ( /* webpackChunkName: "game" */ '../views/news/game.vue')
            }
        ],
        redirect: '/news/school'
    },
    {
        path: '*',
        name: '404',
        component: () =>
            import ( /* webpackChunkName: "404" */ '../views/error/pageNotFound.vue')
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }

})

export default router