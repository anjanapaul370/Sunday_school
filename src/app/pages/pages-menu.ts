import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'MAIN MENU',
    group: true,
  },
  {
    title: 'Dashboard',
    icon: 'home',
    link: '/pages/test',
    home: true,
  },
  {
    title: 'Teachers',
    icon: 'person'
  },
  {
    title: 'Students',
    icon: 'people'
  },
  {
    title: 'Classes',
    icon: 'book-open',
    link: '/pages/classes',
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
    icon: 'percent'
  },
  {
    title: 'USER',
    group: true,
  },
  {
    title: 'Profile',
    icon: 'smiling-face',
  },
  {
    title: 'Logout',
    icon: 'log-out',
    link: '/auth'
  },
];
