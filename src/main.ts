import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue'
import App from './App.vue'
import '@arco-design/web-vue/dist/arco.css'
import { router } from './router'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

createApp(App).use(router).use(ArcoVue).mount('#app')
