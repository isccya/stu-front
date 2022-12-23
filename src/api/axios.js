import axios from 'axios';
import ElementUi from "element-ui";
const axiosApi = axios.create({
    baseURL: 'http://localhost:8000'
});
export const getRewardCodeList = () => {
    return axiosApi({
        url: '/reward/reward_level',
        method: 'get'
    })
}
export const getClassList = () => {
    return axiosApi({
        url: '/class/list',
        method: 'get'
    })
}
// 获取学生列表
export const getStudentListByPage = (current,size) => {
    return axiosApi({
        url: `/student/list/${current}/${size}`,
        method: 'get'
    })
};
// 添加学生
export const addStudent = (form) => {
    return axiosApi({
        url: `/student/add`,
        method: 'POST',
        data: form
    })
}
// 删除学生
export const deleteStudentById = (id) => {
    return axiosApi({
        url: `/student/delete/${id}`,
        method: 'DELETE'
    })
}
// 更新学生
export const updateStudent = (form) => {
    return axiosApi({
        url: `/student/update`,
        method: 'PUT',
        data: form
    })
}
export const getChangeCodeList = () => {
    return axiosApi({
        url: `/change/change_code`,
        method: 'GET'
    })
}
export const getPunishLevelList = () => {
    return axiosApi({
        url: `/punishment/punish_level`,
        method: 'GET'
    })
}
axiosApi.interceptors.response.use(response => {
    const result = response.data;
    const code = result.code;
    if (code === '20000') {
        return response.data;
    } else {
        sendErrorMessage(result)
        return Promise.reject();
    }
}, error => {
    console.log(error)
    return Promise.reject();
})
const sendErrorMessage = (result) => {
    ElementUi.Message({
        message: result.message,
        type: 'error',
        center: true,
        duration: 1000
    })
}