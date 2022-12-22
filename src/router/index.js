import VueRouter from 'vue-router';
import Vue from 'vue';
import BaseLayout from "@/components/layouts/BaseLayout.vue";
import StudentReward from "@/views/StudentReward.vue";
import StudentPunishment from "@/views/StudentPunishment.vue";
import StudentList from "@/views/StudentList.vue";
import StudentChange from "@/views/StudentChange.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: BaseLayout,
        children: [
            {
                name: 'StudentReward',
                path: '/student/reward',
                component: StudentReward
            },
            {
                name: 'StudentPunishment',
                path: '/student/punishment',
                component: StudentPunishment
            },
            {
                name: 'StudentList',
                path: '/student/list',
                component: StudentList
            },
            {
                name: 'StudentChange',
                path: '/student/change',
                component: StudentChange
            }
        ]
    }
]
export default new VueRouter({
    mode: 'history',
    routes
})
