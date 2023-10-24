 import { defineStore } from 'pinia'
import { login, logout, getInfo } from '@/service/user'
import { getToken, setToken, removeToken } from '@/utils/auth'

const useUserStore = defineStore(
    'user',
    {
        state: () => ({
            token: getToken(),
            id: '',
            name: '',
            // roles: [],
            // permissions: []
        }),
        actions: {
            // 登录
            login(username, password) {
                removeToken();
                return new Promise((resolve, reject) => {
                    login(username, password).then(res => {
                        console.log(res)
                        console.log("返回res")
                        setToken(res.token)
                        resolve()
                    }).catch(error => {
                        console.log("返回error res")
                        removeToken();
                        reject(error)
                    })
                })
            },
            // 获取用户信息
            // getInfo() {
            //     return new Promise((resolve, reject) => {
            //         getInfo().then(res => {
            //             const user = res.user
            //             const avatar = (user.avatar == "" || user.avatar == null) ? defAva : import.meta.env.VITE_APP_BASE_API + user.avatar;
            //
            //             if (res.roles && res.roles.length > 0) { // 验证返回的roles是否是一个非空数组
            //                 this.roles = res.roles
            //                 this.permissions = res.permissions
            //             } else {
            //                 this.roles = ['ROLE_DEFAULT']
            //             }
            //             this.id = user.userId
            //             this.name = user.userName
            //             this.avatar = avatar
            //             resolve(res)
            //         }).catch(error => {
            //             reject(error)
            //         })
            //     })
            // },
            // // 退出系统
            logOut() {
                return new Promise((resolve, reject) => {
                    logout().then(() => {
                        this.token = ''
                        this.roles = []
                        this.permissions = []
                        removeToken()
                        resolve()
                    }).catch(error => {
                        reject(error)
                    })
                })
            }
        }
    })

export default useUserStore
