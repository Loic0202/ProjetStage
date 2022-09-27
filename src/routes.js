import Articles from './pages/Articles.vue'
import Home from './pages/Home.vue'
import Todos from './pages/Todos.vue'

export const routes = [
  { path: '/', component: Home },
  { path: '/articles', component: Articles },
  { path: '/todos', component: Todos},
]