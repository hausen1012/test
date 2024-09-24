export interface LoginRequestData {
  /** admin 或 editor */
  username: string
  /** 密码 */
  password: string
  // 如果需要验证码可以新增字段
}

export type LoginResponseData = ApiResponseData<{ token: string }>
