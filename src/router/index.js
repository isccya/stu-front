import VueRouter from 'vue-router';
import Vue from 'vue';
import BaseLayout from "@/components/layouts/BaseLayout.vue";
import StudentReward from "@/views/StudentReward.vue";
import StudentPunishment from "@/views/StudentPunishment.vue";
import StudentList from "@/views/StudentList.vue";
import ChangeCode from "@/views/ChangeCode.vue";
import PunishCode from "@/views/PunishCode.vue";
import RewardCode from "@/views/RewardCode.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: BaseLayout,
        children: [
            {
                name: 'StudentReward',
                path: '/student/reward_code',
                component: RewardCode
            },
            {
                name: 'StudentPunishment',
                path: '/student/punish_code',
                component: PunishCode
            },
            {
                name: 'StudentList',
                path: '/student/list',
                component: StudentList
            },
            {
                name: 'ChangeCode',
                path: '/student/change_code',
                component: ChangeCode
            }
        ]
    }
]
export default new VueRouter({
    mode: 'history',
    routes
})
