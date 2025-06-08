import axios from '@/utils/requests.js'


// 登录验证
const vali_login = (account, password) => {

    return axios.post('/login',{
        account,
        password,
    });
}

// 获取评论列表
const getCommentList = () => {
    // 因为我们不需要进行什么操作，所以这里不用在中间件中进行拦截处理，直接使用默认的json-server的默认接口即可
    return axios.get('/comments')
}

// 获取所有用户
const getAllUser = () => {
    return axios.get('/users')
}
export {
    vali_login,
    getCommentList,
    getAllUser

}