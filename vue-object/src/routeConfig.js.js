import Login from './components/Login.vue'
import Register from './components/Register.vue'


export default [
  {
    path:'/login',
    component:Login
  },
  {
    path:'/register',
    component:Register
  },
  {path:'*', redirect:'/register'}
]
