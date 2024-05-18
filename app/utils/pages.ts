export type PageUrl = {
  name: string;
  url: string;
};

export const mePages: PageUrl[] = [
  {
    name: 'Můj účet',
    url: '/me',
  },
  {
    name: 'Moje akce',
    url: '/events/my',
  },
];

export const eventsPages: PageUrl[] = [
  {
    name: 'Akce',
    url: '/events/all',
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
    name: 'Časté otázky',
    url: '/#faq',
  },
];

export const otherPages: PageUrl[] = [
  {
    name: 'Druhy akcí',
    url: '/events/types',
  },
  {
    name: 'Materiály',
    url: '/materials',
  },
];

export const managerPages: PageUrl[] = [
  {
    name: 'Uživatelé',
    url: '/ambassadors/unapproved',
  },
  {
    name: 'Přihlášení na akce',
    url: '/events/signups',
  },
  {
    name: 'Nove zprávy z akcí',
    url: '/reports',
  },
];
