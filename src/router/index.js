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
            children:[
                {
                    path:'reward',
                    component:Reward
                },
                {
                    path:'Punish',
                    component:Punish
                },
                {
                    path:'showPerson',
                    component:showPerson
                },
                {
                    path:'Change',
                    component:Change
                },
            ]
        }
    ]
})
