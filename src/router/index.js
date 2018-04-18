import Vue from 'vue'
import Router from 'vue-router'
import Home from './../components/Home'
import Login from './../components/Login'
import Register from './../components/Register'

import FeelArticles from './../components/articles/Index'

import Emotions from './../components/Emotions/Index'

import Questions from './../components/Questions/Index'



Vue.use(Router)

const routes = [
	{
    path: '/',
    component: Home,
    children:[
      {
        path:'/',
        name: 'homeLink',
        component: FeelArticles
      },
      {
        path:'/articles',
        name: 'articlesLink',
        component: FeelArticles
      },
      {
        path:'/emotions',
        name: 'emotionsLink',
        component: Emotions
      },
      {
        path:'/questions',
        name: 'questionsLink',
        component: Questions
      }
    ]
  },
	{
    path: '/login',
    name: 'loginLink',
    component: Login
  }
]


export default new Router({
  mode: 'history',
  routes
})
