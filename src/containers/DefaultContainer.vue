<template>
  <div class="app">
    <AppHeader fixed>
      <SidebarToggler class="d-lg-none" display="md" mobile />
      <b-link class="navbar-brand" to="#">
        <img class="navbar-brand-full" src="../assets/img/fleego2.png" width="100" height="30" alt="MYVEEGO Logo">
        <img class="navbar-brand-minimized" src="../assets/img/logo.png" width="30" height="30" alt="MYVEEGO LOGO">
      </b-link>
      <SidebarToggler class="d-md-down-none" display="lg" :defaultOpen=true />

      <b-navbar-nav class="d-md-down-none">
        <base-dropdown tag="li"
                       title-tag="a" class="nav-item">
          <a slot="title" href="#" data-toggle="dropdown" aria-expanded="true">
            <div class="notification d-none d-lg-block d-xl-block"></div>
            <i class="icon-bell"></i>
            <p class="d-lg-none">
              New Notifications
            </p>
          </a>
          <li class="nav-link">
            <a href="#" class="nav-item dropdown-item">Mike John responded to your email</a>
          </li>
          <li class="nav-link">
            <a href="#" class="nav-item dropdown-item">You have 5 more tasks</a>
          </li>
          <li class="nav-link">
            <a href="#" class="nav-item dropdown-item">Your friend Michael is in town</a>
          </li>
          <li class="nav-link">
            <a href="#" class="nav-item dropdown-item">Another notification</a>
          </li>
          <li class="nav-link">
            <a href="#" class="nav-item dropdown-item">Another one</a>
          </li>
        </base-dropdown>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <!--        <b-nav-item class="d-md-down-none">-->
        <!--          <b-dropdown size="lg"  variant="link" toggle-class="text-decoration-none" no-caret>-->
        <!--            <template slot="button-content"><i class="icon-bell"></i></template>-->
        <!--            <b-dropdown-item href="#">Action</b-dropdown-item>-->
        <!--            <b-dropdown-item href="#">Another action</b-dropdown-item>-->
        <!--            <b-dropdown-item href="#">Something else here...</b-dropdown-item>-->
        <!--          </b-dropdown>-->
        <!--        </b-nav-item>-->
        <!--        <b-nav-item class="d-md-down-none">-->
        <!--        <template slot="header">-->
        <!--          <i class="icon-bell"></i>-->
        <!--        </template>-->
        <!--        <template slot="dropdown">-->
        <!--          <b-dropdown-item><i class="fa fa-user" /> Profile</b-dropdown-item>-->
        <!--          <b-dropdown-item><i class="fa fa-wrench" /> Settings</b-dropdown-item>-->
        <!--          <b-dropdown-item><i class="icon-info icons" />Help</b-dropdown-item>-->
        <!--          <b-dropdown-divider />-->
        <!--          <b-dropdown-item><i class="fa fa-lock" /> Logout</b-dropdown-item>-->
        <!--        </template>-->
        <!--        </b-nav-item>-->

        <!--        <b-nav-item class="d-md-down-none">-->
        <!--          <i class="icon-bell"></i>-->
        <!--          <b-badge pill variant="danger">5</b-badge>-->
        <!--        </b-nav-item>-->
        <DefaultHeaderDropdownAccnt/>
      </b-navbar-nav>
      <AsideToggler class="d-none d-lg-block" />
      <!--<AsideToggler class="d-lg-none" mobile />-->
    </AppHeader>
    <div class="app-body">
      <AppSidebar fixed>
        <SidebarHeader/>
        <SidebarForm/>
        <SidebarNav :navItems="nav"></SidebarNav>
        <SidebarFooter/>
        <SidebarMinimizer/>
      </AppSidebar>
      <main class="main">
        <Breadcrumb :list="list"/>
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
      <AppAside fixed>
        <!--aside-->
        <DefaultAside/>
      </AppAside>
    </div>
  </div>
</template>

<script>
    import nav from '../_nav.ts'
    import { Header as AppHeader, SidebarToggler, Sidebar as AppSidebar, SidebarFooter, SidebarForm, SidebarHeader, SidebarMinimizer, SidebarNav, Aside as AppAside, AsideToggler, Footer as TheFooter, Breadcrumb } from '@coreui/vue'
    import DefaultAside from './DefaultAside'
    import DefaultHeaderDropdownAccnt from './DefaultHeaderDropdownAccnt'
    import BaseDropdown from "./BaseDropdown";
    export default {
        name: 'DefaultContainer',
        components: {
            AsideToggler,
            AppHeader,
            AppSidebar,
            AppAside,
            TheFooter,
            Breadcrumb,
            DefaultAside,
            DefaultHeaderDropdownAccnt,
            SidebarForm,
            SidebarFooter,
            SidebarToggler,
            SidebarHeader,
            SidebarNav,
            SidebarMinimizer,
            BaseDropdown
        },
        data () {
            return {
                nav: nav.items
            }
        },
        computed: {
            name () {
                return this.$route.name
            },
            list () {
                return this.$route.matched.filter((route) => route.name || route.meta.label )
            }
        }
    }
</script>
