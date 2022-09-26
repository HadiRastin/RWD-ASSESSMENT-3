import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import AuthorList from '../views/Authors/AuthorList.vue'
import AuthorDetails from '../views/Authors/AuthorDetails.vue'
import ContactAuthor from '../views/Authors/ContactAuthor.vue'

import TopAuthors from '../views/TopAuthors.vue'
import PosterList from '../views/posters/PosterList.vue'
import AuthorMember from '../views/posters/AuthorMember.vue'

import MyPosters from '../views/MyProfile/MyPosters.vue'

import TopPosters from '../views/TopPosters.vue'
import NotFound from '../views/NotFound.vue'
import TheSearch from '../views/search/TheSearch.vue'


import LogIn from '../views/LogIn.vue'
import Register from '../views/Register.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/serach',
    name: 'TheSearch',
    component: TheSearch
  },


  {
    path: '/contact-us',
    name: 'Contact',
    component: Contact
  },

  {
    path: '/authorList',
    name: 'AuthorList',
    component: AuthorList
  },

  

  {
    path: '/myposters',
    component: MyPosters, 
  },

 
  {
    path: '/authorList/:id',
    component: AuthorDetails,
    props:true,
    children:[ {
      path: 'contact',
      component: ContactAuthor,
    }]
  },

  {
    path: '/topPosters',
    name: 'TopPosters',
    component: TopPosters
  },


  {
    path: '/topAuthors',
    name: 'TopAuthors',
    component: TopAuthors
  },

  {
    path: '/posterList',
    name: 'PosterList',
    component: PosterList
  },


  {
    path: '/posterList/:posterId',
    name: 'AuthorMember',
    component: AuthorMember,
    props: true,
  },

  {
    path: '/logIn',
    name: 'LogIn',
    component: LogIn
  },

  {
    path: '/register',
    name: 'Register',
    component: Register
  },

  {
    path: '/all-jobs',
    redirect: '/jobs'
  },


  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
