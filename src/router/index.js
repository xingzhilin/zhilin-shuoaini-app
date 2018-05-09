import Vue from 'vue'
import Router from 'vue-router'
import Home from './../components/pages/Home'
import Login from './../components/pages/Login'
import Register from './../components/pages/Register'

import FeelArticles from './../components/pages/articles/Index'

import Emotions from './../components/pages/emotions/Index'

import Questions from './../components/pages/questions/Index'

import ResumeIndex from './../components/pages/resume/Index'
import ResumeError from './../components/pages/resume/Error'

import AboutIndex from './../components/pages/about/Index'
import AboutUs from './../components/pages/about/Us'
import AboutContact from './../components/pages/about/Contact'
import AboutAuthor from './../components/pages/about/Author'

import MApp from './../components/m/Index'

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
      },
      {
        path:'/about',
        name: 'aboutLink',
        component: AboutIndex,
        redirect: '/about/us',
        children: [   
          {
            path:'/about/us',
            name: 'aboutUsLink',
            component: AboutUs
          },   
          {
            path:'/about/contact',
            name: 'aboutContactLink',
            component: AboutContact
          },
          {
            path:'/about/author',
            name: 'aboutAuthorLink',
            component: AboutAuthor
          }
        ]
      }
    ]
  },
	{
    path: '/login',
    name: 'loginLink',
    component: Login
  },
  {
    path:'/resume',
    name: 'resumeLink',
    component: ResumeIndex
  },
  {
    path:'/error',
    name: 'errorLink',
    component: ResumeError
  }
]


export default new Router({
  mode: 'history',
  routes
})
