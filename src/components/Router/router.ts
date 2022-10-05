import { createRouter, createWebHistory } from 'vue-router'
import AdminPage from '../Views/AdminPage.vue'
import DetailsPost from '../Views/DetailsPost.vue'
import HomePage from '../Views/HomePage.vue'
const routes = [
    { path: '/', component: HomePage},
    { path: '/admin', component: AdminPage},
    { path:'/details/:idPosts', component: DetailsPost, name: 'details'},
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router