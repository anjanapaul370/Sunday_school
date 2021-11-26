import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'MAIN MENU',
    group: true,
  },
  {
    title: 'Dashboard',
    icon: 'home',
    link: '/pages/iot-dashboard',
    home: true,
  },
  {
    title: 'Teachers',
    icon: 'person',
    // children: [
    //   {
    //     title: 'Teacher List',
    //     link: '/pages/layout/stepper',
    //   },
    //   {
    //     title: 'Teacher Add',
    //     link: '/pages/layout/list',
    //   },
    //   {
    //     title: 'Teacher Edit',
    //     link: '/pages/layout/list',
    //   },
    // ],
  },
  {
    title: 'Students',
    icon: 'people',
    // children: [
    //   {
    //     title: 'Student List',
    //     link: '/pages/forms/inputs',
    //   },
    //   {
    //     title: 'Student Add',
    //     link: '/pages/forms/layouts',
    //   },
    //   {
    //     title: 'Student Edit',
    //     link: '/pages/forms/buttons',
    //   },
    // ],
  },
  {
    title: 'Classes',
    icon: 'book-open',
    link: '/pages/ui-features',
    // children: [
    //   {
    //     title: 'Class List',
    //     link: '/pages/ui-features/grid',
    //   },
    //   {
    //     title: 'Class Add',
    //     link: '/pages/ui-features/icons',
    //   },
    //   {
    //     title: 'Class Edit',
    //     link: '/pages/ui-features/typography',
    //   },
    // ],
  },
  {
    title: 'MANAGEMENT',
    group: true,
  },
  {
    title: 'Examination',
    icon: 'edit-2',
  },
  {
    title: 'Time Table',
    icon: 'clock',
  },
  {
    title: 'REPORTS',
    group: true,
  },
  {
    title: 'Attendance',
    icon: 'file-text',
    children: [
      {
        title: 'Teachers',
        link: '/pages/charts/echarts',
      },
      {
        title: 'Students',
        link: '/pages/charts/chartjs',
      },
    ],
  },
  {
    title: 'Marks',
    icon: 'percent',

  },
];
