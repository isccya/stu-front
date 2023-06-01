import VueRouter from 'vue-router';
import Vue from 'vue';
import BaseLayout from "@/components/layouts/BaseLayout.vue";
import StudentList from "@/views/student/StudentList.vue";
import StudentAdd from "@/views/student/StudentAdd.vue"
import StudentSearch from "@/views/student/StudentSearch.vue"
import StudentSearch2 from "@/views/student/StudentSearch2.vue"
import ChangeCode from "@/views/change/ChangeCode.vue";
import PunishCode from "@/views/punish/PunishCode.vue";
import RewardCode from "@/views/reward/RewardCode.vue";
import ChangeSearch from "@/views/change/ChangeSearch.vue";
import RewardSearch from "@/views/reward/RewardSearch.vue";
import PunishSearch from "@/views/punish/PunishSearch.vue";
import RewardAdd from "@/views/reward/RewardAdd.vue";
import PunishAdd from "@/views/punish/PunishAdd.vue";
import ChangeAdd from "@/views/change/ChangeAdd.vue";
import Home from "@/views/Home.vue";
import ClassList from "@/views/class/ClassList.vue";
import DepartmentList from "@/views/department/DepartmentList.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/home',
        component: BaseLayout,
        children: [
            {
                name: 'Home',
                path: '/home',
                component: Home,
                meta: {title: '首页'}
            },
            {
                name: 'StudentReward',
                path: '/student/reward/code',
                component: RewardCode,
                meta: {title: '奖励代码表', module: '奖励管理'}
            },
            {
                name: 'StudentPunishment',
                path: '/student/punish/code',
                component: PunishCode,
                meta: {title: '处分代码表', module: '处分管理'}
            },
            {
                name: 'StudentList',
                path: '/student/list',
                component: StudentList,
                meta: {title: '学生列表', module: '学生管理'}
            },  {
                name: 'StudentAdd',
                path: '/student/studentadd',
                component: StudentAdd,
                meta: {title: '添加学生成绩', module: '学生管理'}
            },
            {
                name: 'StudentSearch',
                path: '/student/search',
                component: StudentSearch,
                meta: {title: '学号查询学生成绩', module: '学生管理'}
            }, 
            {
                name: 'StudentSearch2',
                path: '/student/search2',
                component: StudentSearch2,
                meta: {title: '姓名查询学生成绩', module: '学生管理'}
            }, 
            {
                name: 'ChangeCode',
                path: '/student/change/code',
                component: ChangeCode,
                meta: {title: '流动代码表', module: '流动管理'}
            },
            {
                name: 'ChangeSearch',
                path: '/student/change/search',
                component: ChangeSearch,
                meta: {title: '查询流动记录', module: '流动管理'}
            },
            {
                name: 'PunishSearch',
                path: '/student/punish/search',
                component: PunishSearch,
                meta: {title: '查询处分记录', module: '处分管理'}
            },
            {
                name: 'RewardSearch',
                path: '/student/reward/search',
                component: RewardSearch,
                meta: {title: '查询奖励记录', module: '奖励管理'}
            },
            {
                name: 'RewardAdd',
                path: '/student/reward/add',
                component: RewardAdd,
                meta: {title: '添加奖励记录', module: '奖励管理'}
            },
            {
                name: 'PunishAdd',
                path: '/student/punish/add',
                component: PunishAdd,
                meta: {title: '添加处分记录', module: '处分管理'}
            },
            {
                name: 'ChangeAdd',
                path: '/student/change/add',
                component: ChangeAdd,
                meta: {title: '添加流动记录', module: '流动管理'}
            },
            {
                name: 'ClassList',
                path: '/class/list',
                component: ClassList,
                meta: {title: '班级列表', module: '班级管理'}
            },
            {
                name: 'DepartmentList',
                path: '/department/list',
                component: DepartmentList,
                meta: {title: '院系列表', module: '院系管理'}
            }
        ]
    },
    {
        name: 'Other',
        path: '*',
        redirect: '/home'
    }
]

const vueRouter = new VueRouter({
    mode: 'history',
    routes
})

// 全局路由守卫
vueRouter.beforeEach((to, from, next) => {

    next()
})
export default vueRouter