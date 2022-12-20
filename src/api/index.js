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
export const reqStudentList = (a,b) => {
    return requests({
        url: `/student/list/${a}/${b}`,
        method: 'get',
        headers: {
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
          },
        // params:{
        //     current:a,
        //     size:b,
        // }
    })
}
