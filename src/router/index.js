import vueRouter from 'vue-router';
import Vue from 'vue';

import Main from '../pages/Main'
import Reward from '../pages/Reward'
import Punish from '../pages/Punish'
import showPerson from '../pages/showPerson'
import Change from '../pages/Change'
Vue.use(vueRouter);
export default new vueRouter({
    routes: [
        {
            path: '/',
            component: Main,
            children: [
                {
                    name: '学生奖励',
                    path: 'reward',
                    component: Reward
                },
                {
                    name: '学生惩罚',
                    path: 'Punish',
                    component: Punish
                },
                {
                    name: '学生信息',
                    path: 'showPerson',
                    component: showPerson
                },
                {
                    name: '学生流动',
                    path: 'Change',
                    component: Change
                },
                // 重定向,项目跑起来时候定向到首页
                {
                    path: '*',
                    redirect: '/showPerson',
                }
            ]
        },
    ]
})
