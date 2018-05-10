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
<<<<<<< HEAD

import AboutIndex from './../components/pages/about/Index'
import AboutUs from './../components/pages/about/Us'
import AboutContact from './../components/pages/about/Contact'
import AboutAuthor from './../components/pages/about/Author'

import MApp from './../components/m/Index'
=======

import AboutIndex from './../components/pages/about/Index'
import AboutUs from './../components/pages/about/Us'
import AboutContact from './../components/pages/about/Contact'
import AboutAuthor from './../components/pages/about/Author'

import Tips from './../components/pages/common/Tip'

import MIndex from './../components/m/Index'

>>>>>>> b3aa6197ee9d041517e90ff903d95245e197b243

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
  },
  {
    path: '/tips',
    name: 'tipsLink',
    component: Tips
  },
  {
    path: '/mApp',
    name: 'mLink',
    component: MIndex
  }
]


export default new Router({
  mode: 'history',
  routes
})
