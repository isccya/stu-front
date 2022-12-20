const mutations = {
    addList(state, newvalue) {
        let flag = 0;
        console.log(newvalue.name);
        state.tabsList.forEach(value => {
            if (newvalue.name === value.name) {
                flag = 1;
            }
        });
        if (flag === 0) {
            state.tabsList.push({ name: newvalue.name, path: newvalue.path })
        }
    }
}

const state = {
    tabsList: [
        {
            name: '学生信息',
            path: '/showPerson',
        },
    ]
}
const getters = {

}
export default {
    namespaced: true,
    state,
    mutations,
    getters
}