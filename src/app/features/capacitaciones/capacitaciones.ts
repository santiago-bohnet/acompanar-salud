import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-capacitaciones',
  imports: [RouterLink],
  templateUrl: './capacitaciones.html',
  styleUrl: './capacitaciones.css',
})
export class Capacitaciones {
  readonly capacitaciones = [
    {
      titulo: 'Cuidados del adulto mayor',
      slug: 'cuidados-adulto-mayor',
      duracion: '6 meses',
      modalidad: 'Presencial',
      certificado: 'Si',
      cargaHoraria: 'A confirmar',
      descripcion: 'Formacion orientada al cuidado integral, acompanamiento y atencion de personas mayores.',
      salidaLaboral: ['Residencias geriatricas', 'Centros de dia', 'Instituciones de salud', 'Atencion domiciliaria', 'Cuidado particular'],
      plan: 'Plan de estudios en X modulos',
    },
    {
      titulo: 'Acompanante terapeutico',
      slug: 'acompanante-terapeutico',
      duracion: '12 meses',
      modalidad: 'Presencial',
      certificado: 'Si',
      cargaHoraria: 'A confirmar',
      descripcion: 'Formacion orientada al acompanamiento de personas que requieren apoyo terapeutico, social y cotidiano.',
      salidaLaboral: ['Domicilios particulares', 'Instituciones de salud', 'Centros terapeuticos', 'Instituciones educativas', 'Residencias y centros de dia', 'Equipos interdisciplinarios'],
      plan: 'Plan de estudios en X modulos',
    },
    {
      titulo: 'Cuidados paliativos',
      slug: 'cuidados-paliativos',
      duracion: '4 meses',
      modalidad: 'Presencial',
      certificado: 'Si',
      cargaHoraria: 'A confirmar',
      descripcion: 'Formacion para brindar cuidado, contencion y acompanamiento a personas con enfermedades avanzadas y a sus familias.',
      salidaLaboral: ['Atencion domiciliaria', 'Clinicas y sanatorios', 'Hospitales', 'Residencias', 'Equipos de cuidados paliativos', 'Instituciones de atencion prolongada'],
      plan: 'Plan de estudios en X modulos',
    },
  ];
}
