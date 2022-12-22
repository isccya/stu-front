import { reqaddStudentList,reqStudentList } from '@/api/index'
const actions = {
    async addStudentList(context,form) {

        let result = await reqaddStudentList(form);//最终的最终是在vuex里面发送请求.acitons再给mutations,mutations再把数据放入仓库中
        console.log(form);
        // if (result.code == 200) {
            context.commit('ADDSTUDENTLIST', form)
        // }
    },
    async StudentList(context,currentSize) {
        let result = await reqStudentList(currentSize.current,currentSize.size);//最终的最终是在vuex里面发送请求.acitons再给mutations,mutations再把数据放入仓库中
        if (result.code == 20000) {
            context.commit('STUDENTLIST', result.data)
        }
    }
}

const mutations = {
    STUDENTLIST(state,studentList) {
        console.log(studentList);
        state.studentList = studentList;//服务器返回的数据给仓库
    },
}

const state = {
    studentList: [],
}
const getters = {

}
export default {
    namespaced: true,//开启命名空间,modules里面的分类名才能被map四个方法捕捉到
    state,
    actions,
    mutations,
    getters
}