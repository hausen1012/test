import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'virtual:svg-icons-register'
import gloablComponent from './components/index'
import '@/styles/index.less'
import { createPinia } from 'pinia'

import {loginApi} from '@/api/login'

loginApi({
  username: 'admin',
  password: '111111'
})
.then(response => {
  console.log(response.data)
})
.catch(error => {
  console.error('Error:', error)
});

const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn,
})
app.use(gloablComponent)
app.use(createPinia())

app.mount('#app')
