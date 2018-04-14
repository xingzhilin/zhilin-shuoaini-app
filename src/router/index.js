import Vue from 'vue'
import Router from 'vue-router'
import Home from './../components/Home'
import Login from './../components/Login'
import Register from './../components/Register'



Vue.use(Router)

const routes = [
	{
      path: '/',
      name: 'homeLink',
      component: Home
    },
	{
      path: '/login',
      name: 'loginLink',
      component: Login
    },
	{
      path: '/register',
      name: 'registerLink',
      component: Register
    }
]


export default new Router({
  mode: 'history',
  routes
})
