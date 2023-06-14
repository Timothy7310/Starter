import { MainLazy, AnimeLazy, MangaLazy, NotFound } from 'pages';

export enum AppRoutes {
  MAIN = 'main',
  ANIME = 'anime',
  MANGA = 'manga',
  NOTFOUND = 'notFound',
}

export const routesConfig = [
  {
    id: [AppRoutes.MAIN],
    path: '/',
    content: <MainLazy />,
  },
  {
    id: [AppRoutes.ANIME],
    path: '/anime',
    content: <AnimeLazy />,
  },
  {
    id: [AppRoutes.MANGA],
    path: '/manga',
    content: <MangaLazy />,
  },
  {
    id: [AppRoutes.NOTFOUND],
    path: '*',
    content: <NotFound />,
  },
];
