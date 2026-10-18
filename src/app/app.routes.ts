import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
  },
  {
    path: 'servicios',
    loadComponent: () => import('./features/servicios/servicios').then((m) => m.Servicios),
  },
  {
    path: 'novedades',
    loadComponent: () => import('./features/novedades/novedades').then((m) => m.Novedades),
  },
  {
    path: 'ubicacion',
    loadComponent: () => import('./features/ubicacion/ubicacion').then((m) => m.Ubicacion),
  },
  {
    path: 'capacitaciones',
    loadComponent: () => import('./features/capacitaciones/capacitaciones').then((m) => m.Capacitaciones),
  },
  {
    path: 'capacitaciones/:slug',
    loadComponent: () => import('./features/capacitaciones/detalle-capacitacion/detalle-capacitacion').then((m) => m.DetalleCapacitacion),
  },
];

