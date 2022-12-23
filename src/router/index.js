import VueRouter from 'vue-router';
import Vue from 'vue';
import BaseLayout from "@/components/layouts/BaseLayout.vue";
import StudentList from "@/views/student/StudentList.vue";
import ChangeCode from "@/views/change/ChangeCode.vue";
import PunishCode from "@/views/punish/PunishCode.vue";
import RewardCode from "@/views/reward/RewardCode.vue";
import ChangeSearch from "@/views/change/ChangeSearch.vue";
import RewardSearch from "@/views/reward/RewardSearch.vue";
import PunishSearch from "@/views/punish/PunishSearch.vue";
import RewardAdd from "@/views/reward/RewardAdd.vue";
import PunishAdd from "@/views/punish/PunishAdd.vue";
import ChangeAdd from "@/views/change/ChangeAdd.vue";

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
