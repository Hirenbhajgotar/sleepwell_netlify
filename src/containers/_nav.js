import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav = [
    {
        _tag: 'CSidebarNavItem',
        name: 'Dashboard',
        to: '/dashboard',
        // icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
        icon: <i class="ri-dashboard-2-fill mr-3 ri-lg"></i>,
        badge: {
            color: 'info',
            // text: 'NEW',
        }
    },
    // {
    //   _tag: 'CSidebarNavTitle',
    //   _children: ['Theme']
    // },
    // {
    //   _tag: 'CSidebarNavItem',
    //   name: 'Colors',
    //   to: '/theme/colors',
    //   icon: 'cil-drop',
    // },
    // {
    //   _tag: 'CSidebarNavItem',
    //   name: 'Typography',
    //   to: '/theme/typography',
    //   icon: 'cil-pencil',
    // },
    // {
    //   _tag: 'CSidebarNavTitle',
    //   _children: ['Components']
    // },
    // {
    //   _tag: 'CSidebarNavDropdown',
    //   name: 'Base',
    //   route: '/base',
    //   icon: 'cil-puzzle',
    //   _children: [
    //     {
    //       _tag: 'CSidebarNavItem',
    //       name: 'Breadcrumb',
    //       to: '/base/breadcrumbs',
    //     },
    //     {
    //       _tag: 'CSidebarNavItem',
    //       name: 'Cards',
    //       to: '/base/cards',
    //     },
    //     {
    //       _tag: 'CSidebarNavItem',
    //       name: 'Carousel',
    //       to: '/base/carousels',
    //     },
    //     {
    //       _tag: 'CSidebarNavItem',
    //       name: 'Collapse',
    //       to: '/base/collapses',
    //     },
    //     {
    //       _tag: 'CSidebarNavItem',
    //       name: 'Forms',
    //       to: '/base/forms',
    //     },
    //     {
    //       _tag: 'CSidebarNavItem',
    //       name: 'Jumbotron',
    //       to: '/base/jumbotrons',
    //     },
    //     {
    //       _tag: 'CSidebarNavItem',
    //       name: 'List group',
    //       to: '/base/list-groups',
    //     },
    //     {
    //       _tag: 'CSidebarNavItem',
    //       name: 'Navs',
    //       to: '/base/navs',
    //     },
    //     {
    //       _tag: 'CSidebarNavItem',
    //       name: 'Navbars',
    //       to: '/base/navbars',
    //     },
    //     {
    //       _tag: 'CSidebarNavItem',
    //       name: 'Pagination',
    //       to: '/base/paginations',
    //     },
    //     {
    //       _tag: 'CSidebarNavItem',
    //       name: 'Popovers',
    //       to: '/base/popovers',
    //     },
    //     {
    //       _tag: 'CSidebarNavItem',
    //       name: 'Progress',
    //       to: '/base/progress-bar',
    //     },
    //     {
    //       _tag: 'CSidebarNavItem',
    //       name: 'Switches',
    //       to: '/base/switches',
    //     },
    //     {
    //       _tag: 'CSidebarNavItem',
    //       name: 'Tables',
    //       to: '/base/tables',
    //     },
    //     {
    //       _tag: 'CSidebarNavItem',
    //       name: 'Tabs',
    //       to: '/base/tabs',
    //     },
    //     {
    //       _tag: 'CSidebarNavItem',
    //       name: 'Tooltips',
    //       to: '/base/tooltips',
    //     },
    //   ],
    // },
    // {
    //   _tag: 'CSidebarNavDropdown',
    //   name: 'Buttons',
    //   route: '/buttons',
    //   icon: 'cil-cursor',
    //   _children: [
    //     {
    //       _tag: 'CSidebarNavItem',
    //       name: 'Buttons',
    //       to: '/buttons/buttons',
    //     },
    //     {
    //       _tag: 'CSidebarNavItem',
    //       name: 'Brand buttons',
    //       to: '/buttons/brand-buttons',
    //     },
    //     {
    //       _tag: 'CSidebarNavItem',
    //       name: 'Buttons groups',
    //       to: '/buttons/button-groups',
    //     },
    //     {
    //       _tag: 'CSidebarNavItem',
    //       name: 'Dropdowns',
    //       to: '/buttons/button-dropdowns',
    //     }
    //   ],
    // },
    // {
    //   _tag: 'CSidebarNavItem',
    //   name: 'Charts',
    //   to: '/charts',
    //   icon: 'cil-chart-pie'
    // },
    // {
    //   _tag: 'CSidebarNavDropdown',
    //   name: 'Icons',
    //   route: '/icons',
    //   icon: 'cil-star',
    //   _children: [
    //     {
    //       _tag: 'CSidebarNavItem',
    //       name: 'CoreUI Free',
    //       to: '/icons/coreui-icons',
    //       badge: {
    //         color: 'success',
    //         text: 'NEW',
    //       },
    //     },
    //     {
    //       _tag: 'CSidebarNavItem',
    //       name: 'CoreUI Flags',
    //       to: '/icons/flags',
    //     },
    //     {
    //       _tag: 'CSidebarNavItem',
    //       name: 'CoreUI Brands',
    //       to: '/icons/brands',
    //     },
    //   ],
    // },
    // {
    //   _tag: 'CSidebarNavDropdown',
    //   name: 'Notifications',
    //   route: '/notifications',
    //   icon: 'cil-bell',
    //   _children: [
    //     {
    //       _tag: 'CSidebarNavItem',
    //       name: 'Alerts',
    //       to: '/notifications/alerts',
    //     },
    //     {
    //       _tag: 'CSidebarNavItem',
    //       name: 'Badges',
    //       to: '/notifications/badges',
    //     },
    //     {
    //       _tag: 'CSidebarNavItem',
    //       name: 'Modal',
    //       to: '/notifications/modals',
    //     },
    //     {
    //       _tag: 'CSidebarNavItem',
    //       name: 'Toaster',
    //       to: '/notifications/toaster'
    //     }
    //   ]
    // },
    // {
    //   _tag: 'CSidebarNavItem',
    //   name: 'Widgets',
    //   to: '/widgets',
    //   icon: 'cil-calculator',
    //   badge: {
    //     color: 'info',
    //     text: 'NEW',
    //   },
    // },
    // {
    //   _tag: 'CSidebarNavDivider'
    // },
    // {
    //   _tag: 'CSidebarNavTitle',
    //   _children: ['Extras'],
    // },
    // {
    //   _tag: 'CSidebarNavDropdown',
    //   name: 'Account',
    //   route: '/pages',
    //   icon: 'cil-user',
    // },
    // {
    //   _tag: 'CSidebarNavItem',
    //   name: 'Login',
    //   to: '/login',
    //   icon: 'cil-user',
    // },
    // {
    //   _tag: 'CSidebarNavItem',
    //   name: 'Register',
    //   to: '/register',
    // },
    // {
    //   _tag: 'CSidebarNavItem',
    //   name: 'Add Product',
    //   to: '/500',
    // },
   
    // {
    //   _tag: 'CSidebarNavItem',
    //   name: 'Disabled',
    //   icon: 'cil-ban',
    //   badge: {
    //     color: 'secondary',
    //     text: 'NEW',
    //   },
    //   addLinkClass: 'c-disabled',
    //   'disabled': true
    // },
    // {
    //   _tag: 'CSidebarNavDivider',
    //   className: 'm-2'
    // },
    // {
    //   _tag: 'CSidebarNavTitle',
    //   _children: ['Labels']
    // },
    // {
    //   _tag: 'CSidebarNavItem',
    //   name: 'Label danger',
    //   to: '',
    //   icon: {
    //     name: 'cil-star',
    //     className: 'text-danger'
    //   },
    //   label: true
    // },
    // {
    //   _tag: 'CSidebarNavItem',
    //   name: 'Label info',
    //   to: '',
    //   icon: {
    //     name: 'cil-star',
    //     className: 'text-info'
    //   },
    //   label: true
    // },
    // {
    //   _tag: 'CSidebarNavItem',
    //   name: 'Label warning',
    //   to: '',
    //   icon: {
    //     name: 'cil-star',
    //     className: 'text-warning'
    //   },
    //   label: true
    // },
    // {
    //   _tag: 'CSidebarNavDivider',
    //   className: 'm-2'
    // }



    // ----------------------------

    {
        _tag: 'CSidebarNavItem',
        name: 'Users',
        to: '/users',
        // icon: 'cil-user',
        icon: <i class="ri-user-fill mr-3 ri-lg"></i>,
    },
    {
        _tag: 'CSidebarNavItem',
        name: 'Banner',
        to: '/banners',
        // icon: 'cil-casino',
        icon: <i class="ri-image-2-fill mr-3 ri-lg"></i>,
    },
    {
        _tag: 'CSidebarNavItem',
        name: 'Categories',
        to: '/categories',
        icon: <i class="ri-shopping-bag-2-fill mr-3 ri-lg"></i>,
    },
    {
        _tag: 'CSidebarNavItem',
        name: 'Sub Categories',
        to: '/sub-categories',
        icon: <i class="ri-shopping-bag-2-fill mr-3 ri-lg"></i>,
    },
    {
        _tag: 'CSidebarNavItem',
        name: 'Products',
        to: '/products',
        icon: <i class="ri-medal-fill mr-3 ri-lg"></i>,
    },
    {
        _tag: 'CSidebarNavItem',
        name: 'Permision',
        to: '/permision',
        icon: <i class="ri-rotate-lock-fill mr-3 ri-lg"></i>,
    },
    {
        _tag: 'CSidebarNavItem',
        name: 'Newsletter',
        to: '/newsletter',
        icon: <i class="ri-mail-volume-fill mr-3 ri-lg"></i>,
    },
    {
        _tag: 'CSidebarNavItem',
        name: 'Feedback',
        to: '/feedback',
        icon: <i class="ri-feedback-fill mr-3 ri-lg"></i>,
    },
    // {
    //     _tag: 'CSidebarNavItem',
    //     name: 'Products',
    //     to: '/add-product',
    //     icon: 'cil-user',
    // },
    
]

export default _nav
