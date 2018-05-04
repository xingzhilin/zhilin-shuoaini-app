import Vue from 'vue'
import Router from 'vue-router'
import Home from './../components/Home'
import Login from './../components/Login'
import Register from './../components/Register'

import FeelArticles from './../components/articles/Index'

import Emotions from './../components/emotions/Index'

import Questions from './../components/questions/Index'

import ResumeIndex from './../components/resume/Index'
import ResumeError from './../components/resume/Error'

import AboutIndex from './../components/about/Index'
import AboutUs from './../components/about/Us'
import AboutContact from './../components/about/Contact'
import AboutAuthor from './../components/about/Author'

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
