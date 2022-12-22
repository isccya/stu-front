import requests from "./request";
export const reqReward = () => {
    return requests({
        url: '/reward/reward_level',
        method: 'get',
        headers: {
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
          },
    })
}
export const reqClassList = () => {
    return requests({
        url: '/class/list',
        method: 'get',
    })
}
// 获取学生列表
export const reqStudentList = (current,size) => {
    return requests({
        url: `/student/list/${current}/${size}`,
        method: 'get',
    })
};
// 添加学生
export const reqaddStudentList = (form) => {
    return requests({
        url: `/student/add`,
        method: 'POST',
        data:form,
    })
}
// 删除学生
export const reqdeleteStudentList = (id) => {
    return requests({
        url: `/student/delete/${id}`,
        method: 'DELETE',
    })
}
// 更新学生
export const requpdateStudentList = () => {
    return requests({
        url: `/student/update`,
        method: 'PUT',
    })
}
