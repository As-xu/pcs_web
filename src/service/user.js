import request from '@/utils/request'


// 登录方法
export function login(username, password) {
    const data = {
        "user_name": username,
        "password": password,
    };
    return request({
        url: '/user/login',
        headers: {
            noToken: true
        },
        method: 'post',
        data: data
    })
}

// 注册方法
export function register(data) {
    return request({
        url: '/user/register',
        headers: {
            noToken: true
        },
        method: 'post',
        data: data
    })
}

// 获取用户详细信息
export function getInfo() {
    return request({
        url: '/getInfo',
        method: 'post'
    })
}

// 退出方法
export function logout() {
    return request({
        url: '/user/logout',
        method: 'post'
    })
}

