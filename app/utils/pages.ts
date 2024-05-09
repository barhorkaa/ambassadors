export type PageUrl = {
  name: string;
  url: string;
};

export const eventsPages: PageUrl[] = [
  {
    name: 'Moje akce',
    url: '/events/my',
  },
  {
    name: 'Akce',
    url: '/events',
  },
  {
    name: 'Historie akcí',
    url: '/events/history',
  },
];

export const programPages: PageUrl[] = [
  {
    name: 'O programu',
    url: '/',
  },
  {
    name: 'Kontakty',
    url: '/#contacts',
  },
  {
    name: 'Pomocník',
    url: '/help',
  },
];

export const otherPages: PageUrl[] = [
  {
    name: 'Materiály',
    url: '/materials',
  },
  {
    name: 'Druhy akcí',
    url: '/events/types',
  },
];

export const managerPages: PageUrl[] = [
  {
    name: 'Uživatelé',
    url: '/ambassadors',
  },
  {
    name: 'Přihlášení na akce',
    url: '/events/signups',
  },
  {
    name: 'Zprávy z akcí',
    url: '/reports',
  },
];
