import axios from 'axios';
import ElementUi from "element-ui";

const axiosApi = axios.create({
    baseURL: 'http://120.79.92.244:8081'
});
export const getRewardCodeList = () => {
    return axiosApi({
        url: '/reward/reward_level',
        method: 'GET'
    })
}
export const getClassList = () => {
    return axiosApi({
        url: '/class/list',
        method: 'GET'
    })
}
export const getDepartmentList = () => {
    return axiosApi({
        url: 'department/list',
        method: "GET"
    })
}
// 获取学生列表
export const getStudentListByPage = (current, size) => {
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
// 一键导出学生成绩
export function exportScore(flag){
    return axiosApi({
        url:`/scores/exportScoresContent/${flag}`,
        method:'get',
    })
}
// 添加学生成绩
export function addStudentScore(data){
    return axiosApi({
        url:"/scores/add",
        method:'post',
        data,
    })
}
// 通过学号查找学生成绩
export const getScoreListById = (id) => {
    return axiosApi({
        url: `/scores/get-byId/${id}`,
        method: 'get',
    })
}
// 通过姓名查找学生成绩
export const getScoreListByName = (name) => {
    return axiosApi({
        url: `/scores/getByName/${name}`,
        method: 'get',
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

export const getRewardListById = (id) => {
        return axiosApi({
            url: `/reward/list/${id}`,
            method: "GET"
        })
}
export const getPunishListById = (id) => {
        return axiosApi({
            url: `/punishment/list/${id}`,
            method: "GET"
        })
}
export const addReward = (form) => {
    return axiosApi({
        url: `/reward/add`,
        method: 'POST',
        data: form
    })
}
export const addPunish = (form) => {
    return axiosApi({
        url: `/punishment/add`,
        method: 'POST',
        data: form
    })
}
export const addChange = (form) => {
    return axiosApi({
        url: `/change/add`,
        method: 'POST',
        data: form
    })
}
export const getChangeListById = (id) => {
        return axiosApi({
            url: `/change/list/${id}`,
            method: "GET"
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