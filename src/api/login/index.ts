import request from '@/utils/request.ts'
import type { LoginRequestData, LoginResponseData } from './types/login.ts'

/** 登录并返回 Token */
export function loginApi(data: LoginRequestData) {
  return request<LoginResponseData>({
    url: '/user/login',
    method: 'post',
    data,
  })
}
