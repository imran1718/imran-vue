import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloWorld from '../components/HelloWorld'
import Home1 from '../components/Home1'
import Admin from '../components/Admin'
import College from '../components/College'
import Student from '../components/Student'
import Approve from '../components/Approve'
import Delete from '../components/Delete'
import Viewstudent from '../components/Viewstudent'
import Viewcomplaints from '../components/Viewcomplaints'
import Aboutus from '../components/Aboutus'
import Contactus from '../components/Contactus'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/Aboutus',
    name: 'Aboutus',
    component: Aboutus
  },
  {
    path: '/Contactus',
    name: 'Contactus',
    component: Contactus
  },
  {
    path: '/Home1',
    name: 'Home1',
    component: Home1
   
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/College',
    name: 'College',
    component: College
  },
  {
    path: '/Student',
    name: 'Student',
    component: Student
  },
  {
    path: '/Admin/Approve',
    name: 'Approve',
    component: Approve
  },
  {
    path: '/Admin/Delete',
    name: 'Delete',
    component: Delete
  },
  {
    path: '/Admin/Viewstudent',
    name: 'Viewstudent',
    component: Viewstudent
  },
  {
    path: '/Admin/Viewcomplaints',
    name: 'Viewcomplaints',
    component: Viewcomplaints
  }

];

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
});

export default router;
