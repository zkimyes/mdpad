const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/config',
        meta: {
            title: '设置'
        },
        component: (resolve) => require(['./views/config/index.vue'], resolve),
        children:[
            {
                path: 'website',
                meta:{
                    title:'网站设置'
                },
                component: (resolve) => require(['./views/config/website.vue'], resolve),
            }
        ]
    },
    {
        path:'/login',
        meta:{
            title:'登录'
        },
        component:(resolve) => require(['./views/login.vue'], resolve)
    },
    {
        path:'/dashboard',
        meta:{
            title:'dashboard'
        },
        component:(resolve) => require(['./views/main/dashboard.vue'], resolve)
    }
];
export default routers;