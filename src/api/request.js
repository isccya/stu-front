// 这个文件对axios的二次封装,主要是为了使用请求拦截器和响应拦截器
import axios from "axios";
import nprogress from 'nprogress'//进度条
import 'nprogress/nprogress.css'//进度条样式
import qs from "qs"
const requests=axios.create({
    baseURL:'http://120.79.92.244:8080',
    timeout:5000,
})
// start进度条开始,done进度条结束 



requests.interceptors.request.use((config)=>{
    config.data = qs.stringify(config.data) 
    nprogress.start();//进度条开始
    return config;          
})



requests.interceptors.response.use((res)=>{
    // 成功的回调函数,成功回调会返回服务器返回来的数据
    nprogress.done();
    return res.data;
},(error)=>{
    // 服务器响应失败的回调函数
    return Promise.reject(new Error('fail'))
})

export default requests; 