import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
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
