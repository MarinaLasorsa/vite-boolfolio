import { createApp } from 'vue'
//import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: AppHome },
        { path: '/portfolio', name: 'portfolio', component: AppPortfolio },
        { path: '/contact', name: 'contact', component: AppContact }
    ]
})

createApp(App).use(router).mount('#app')
