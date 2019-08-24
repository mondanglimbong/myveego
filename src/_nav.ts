export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-home',
      badge: {
        variant: 'primary',
        text: 'NEW'
      }
    },
    {
      name: 'Report',
      url: '/report',
      icon: 'icon-chart',

      children: [
        {
          name: 'Vehicle',
          url: '/VehicleReport',
          icon: 'icon-chart'
        },
        {
          name: 'Driver',
          url: '/DriverReport',
          icon: 'icon-chart'
        },
        {
          name: 'Report Trip',
          url: '/base/carousels',
          icon: 'icon-chart'
        },
        {
          name: 'Report',
          url: '/base/breadcrumbs',
          icon: 'icon-chart'
        },
        {
          name: 'Upload Case',
          url: '/base/cards',
          icon: 'icon-chart'
        },
        {
          name: 'Summary',
          url: '/base/carousels',
          icon: 'icon-chart'
        },
        {
          name: 'Upload Assets',
          url: '/base/breadcrumbs',
          icon: 'icon-chart'
        },
        {
          name: 'Change History',
          url: '/base/cards',
          icon: 'icon-chart'
        },
        {
          name: 'Daily Report',
          url: '/base/carousels',
          icon: 'icon-chart'
        },
        {
          name: 'Working Hour',
          url: '/base/breadcrumbs',
          icon: 'icon-chart'
        },
        {
          name: 'Vessel Summary Report',
          url: '/base/cards',
          icon: 'icon-chart'
        },
        {
          name: 'Vessel Detail',
          url: '/base/carousels',
          icon: 'icon-chart'
        }
      ]
    },
    {
      name: 'Assignments',
      url: '/assignments',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Manage',
          url: '/buttons/standard-buttons',
          icon: 'icon-puzzle'
        },
        {
          name: 'Forklit Control',
          url: '/buttons/dropdowns',
          icon: 'icon-puzzle'
        },
        {
          name: 'Fleet Control',
          url: '/buttons/button-groups',
          icon: 'icon-puzzle'
        },
      ]
    },
    {
      name: 'Master Data',
      url: '/Crud',
      icon: 'icon-book-open ',
      children: [
        {
          name: 'User',
          url: '/Users',
          icon: 'icon-book-open'
        },
        {
          name: 'Vehicle',
          url: '/Vehicle',
          icon: 'icon-book-open'
        },
        {
          name: 'Driver',
          url: '/Driver',
          icon: 'icon-book-open'
        },
        {
          name: 'Group',
          url: '/buttons/brand-buttons',
          icon: 'icon-book-open'
        },
        {
          name: 'Notification',
          url: '/buttons/brand-buttons',
          icon: 'icon-book-open'
        },
        {
          name: 'Pool',
          url: '/buttons/button-groups',
          icon: 'icon-book-open'
        },
        {
          name: 'Customer Point',
          url: '/buttons/brand-buttons',
          icon: 'icon-book-open'
        },
        {
          name: 'Assets',
          url: '/buttons/brand-buttons',
          icon: 'icon-book-open'
        }
      ]
    },
    {
      name: 'Maintenance',
      url: '/maintenance',
      icon: 'icon-settings',
      children: [
        {
          name: 'Maintenance Report',
          url: '/maintenance-report',
          icon: 'icon-settings'
        },
        {
          name: 'List',
          url: 'list',
          icon: 'icon-settings'
        },
      ]
    },
    {
      name: 'Widget Setting',
      url: '/widget-setting',
      icon: 'icon-wrench',
      children: [
        {
          name: 'iFrame',
          url: '/pages/login',
          icon: 'icon-wrench'
        },
        {
          name: 'Widget Configuration',
          url: '/ConfigWidget',
          icon: 'icon-wrench'
        },
      ]
    },
  ]
}
