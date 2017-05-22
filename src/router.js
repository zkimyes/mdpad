const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
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