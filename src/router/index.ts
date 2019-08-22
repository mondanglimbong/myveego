import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// Containers
const DefaultContainer = () => import('../containers/DefaultContainer.vue')

// Views
const Dashboard = () => import('../views/DashboardPage.vue')

// Grid Responsive
const Setting = () => import('@/views/users/Setting.vue')

//Crud
const Users = () => import('@/views/Crud/Users.vue')
const Driver = () => import('@/views/Crud/Driver.vue')
const Vehicle = () => import('@/views/Crud/Vehicle.vue')

//Report
const DriverAnalytics = () => import('@/views/report/DriverAnalytics.vue')
const DriverReport = () => import('@/views/report/DriverReport.vue')
const VehicleReport = () => import('@/views/report/VehicleReport.vue')

//Details
const VehicleDetails = () => import('@/views/Details/VehicleDetails.vue')
const Coba = () => import('@/views/Details/coba.vue')

//Widget
const ConfigWidget = () => import('@/views/widgets/ConfigWidget.vue')

//Login
const Page404 = () => import('@/views/pages/Page404.vue')
const Page500 = () => import('@/views/pages/Page500.vue')
const Login = () => import('@/views/pages/Login.vue')
const Register = () => import('@/views/pages/Register.vue')

export default new Router({
  mode: 'hash',
  linkActiveClass: 'open active',
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: DefaultContainer,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'setting',
          name: 'Setting',
          component: Setting
        },
        {
          path: 'users',
          name: 'User',
          component: Users
        },
        {
          path: 'driver',
          name: 'Driver',
          component: Driver
        },
        {
          path: 'vehicle',
          name: 'Vehicle',
          component: Vehicle
        },
        ,
        {
          path: 'driverreport',
          name: 'Driver Report',
          component: DriverReport
        },
        ,
        {
          path: 'driveranalytics',
          name: 'Driver Analytics',
          component: DriverAnalytics
        },
        {
          path: 'vehiclereport',
          name: 'Vehicle Report',
          component: VehicleReport
        },
        {
          path: 'vehicledetails',
          name: 'Vehicle Details',
          component: VehicleDetails
        },
        {
          path: 'coba',
          name: 'coba',
          component: Coba
        },
        {
          path: 'configwidget',
          name: 'Configuration Widget',
          component: ConfigWidget
        }
      ]
    },
    {
      path: '/pages',
      redirect: '/pages/404',
      name: 'Pages',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '404',
          name: 'Page404',
          component: Page404
        },
        {
          path: '500',
          name: 'Page500',
          component: Page500
        },
        {
          path: 'login',
          name: 'Login',
          component: Login
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        }
      ]
    }
  ]
})

