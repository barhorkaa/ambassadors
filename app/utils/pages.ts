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
    url: '/events/my/current',
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
    url: '/events/types/all',
  },
  {
    name: 'Materiály',
    url: '/materials/all',
  },
];

export const managerPages: PageUrl[] = [
  {
    name: 'Uživatelé',
    url: '/ambassadors/unapproved',
  },
  {
    name: 'Přihlášení na akce',
    url: '/signups/unapproved',
  },
  {
    name: 'Nove zprávy z akcí',
    url: '/reports',
  },
];
