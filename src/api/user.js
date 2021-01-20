/*
用户相关模块
 */
import request from '@/utils/request'

// 用户登录
export const login = () => {
  return request({
    method: 'POST',
    url: '/api/user_login/Login'
  })
}
