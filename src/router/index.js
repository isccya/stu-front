import VueRouter from 'vue-router';
import Vue from 'vue';
import BaseLayout from "@/components/layouts/BaseLayout.vue";
import StudentReward from "@/views/StudentReward.vue";
import StudentPunishment from "@/views/StudentPunishment.vue";
import StudentList from "@/views/StudentList.vue";
import ChangeCode from "@/views/ChangeCode.vue";
import PunishCode from "@/views/PunishCode.vue";
import RewardCode from "@/views/RewardCode.vue";
import ChangeSearch from "@/views/ChangeSearch.vue";
import RewardSearch from "@/views/RewardSearch.vue";
import PunishSearch from "@/views/PunishSearch.vue";
import RewardAdd from "@/views/RewardAdd.vue";
import PunishAdd from "@/views/PunishAdd.vue";
import ChangeAdd from "@/views/ChangeAdd.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/student/list',
        component: BaseLayout,
        children: [
            {
                name: 'StudentReward',
                path: '/student/reward/code',
                component: RewardCode
            },
            {
                name: 'StudentPunishment',
                path: '/student/punish/code',
                component: PunishCode
            },
            {
                name: 'StudentList',
                path: '/student/list',
                component: StudentList
            },
            {
                name: 'ChangeCode',
                path: '/student/change/code',
                component: ChangeCode
            },
            {
                name: 'ChangeSearch',
                path: '/student/change/search',
                component: ChangeSearch
            },
            {
                name: 'PunishSearch',
                path: '/student/punish/search',
                component: PunishSearch
            },
            {
                name: 'RewardSearch',
                path: '/student/reward/search',
                component: RewardSearch
            },
            {
                name: 'RewardAdd',
                path: '/student/reward/add',
                component: RewardAdd
            },
            {
                name: 'PunishAdd',
                path: '/student/punish/add',
                component: PunishAdd
            },
            {
                name: 'ChangeAdd',
                path: '/student/change/add',
                component: ChangeAdd
            },
        ]
    },
    {
        name: 'Other',
        path: '*',
        redirect: '/student/list'
    }
]
export default new VueRouter({
    mode: 'history',
    routes
})
