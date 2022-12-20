import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import showPerson from './showPerson'
import Punish from './Punish'
import Reward from './Reward'
import Change from './Change'
import Tap from './Tab'




export default new Vuex.Store({
    modules: {
     showPerson,
     Change,
     Reward,
     Punish,
     Tap
    }
})
