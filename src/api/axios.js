import axios from 'axios';
import ElementUi from "element-ui";
const axiosApi = axios.create({
    baseURL: 'http://120.79.92.244:8080'
});
export const getRewardLevelList = () => {
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
export const addStudentList = (form) => {
    return axiosApi({
        url: `/student/add`,
        method: 'POST',
        data:form
    })
}
// 删除学生
export const deleteStudentById = (id) => {
    return axiosApi({
        url: `/student/delete/${id}`,
        method: 'DELETE',
    })
}
// 更新学生
export const updateStudent = () => {
    return axiosApi({
        url: `/student/update`,
        method: 'PUT',
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