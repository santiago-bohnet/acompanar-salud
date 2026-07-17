import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

type CapacitacionDetalle = {
  slug: string;
  nombre: string;
  duracion: string;
  modalidad: string;
  certificado: string;
  descripcion: string;
  salidaLaboral: string[];
  plan: string;
};

const CAPACITACIONES: CapacitacionDetalle[] = [
  {
    slug: 'cuidados-adulto-mayor',
    nombre: 'Cuidados del adulto mayor',
    duracion: '6 meses',
    modalidad: 'Presencial',
    certificado: 'Si',
    descripcion: 'Formacion orientada al cuidado integral, acompanamiento y atencion de personas mayores.',
    salidaLaboral: ['Residencias geriatricas', 'Centros de dia', 'Instituciones de salud', 'Atencion domiciliaria', 'Cuidado particular'],
    plan: 'Plan de estudios en X modulos',
  },
  {
    slug: 'acompanante-terapeutico',
    nombre: 'Acompanante terapeutico',
    duracion: '12 meses',
    modalidad: 'Presencial',
    certificado: 'Si',
    descripcion: 'Formacion orientada al acompanamiento de personas que requieren apoyo terapeutico, social y cotidiano.',
    salidaLaboral: ['Domicilios particulares', 'Instituciones de salud', 'Centros terapeuticos', 'Instituciones educativas', 'Residencias y centros de dia', 'Equipos interdisciplinarios'],
    plan: 'Plan de estudios en X modulos',
  },
  {
    slug: 'cuidados-paliativos',
    nombre: 'Cuidados paliativos',
    duracion: '4 meses',
    modalidad: 'Presencial',
    certificado: 'Si',
    descripcion: 'Formacion para brindar cuidado, contencion y acompanamiento a personas con enfermedades avanzadas y a sus familias.',
    salidaLaboral: ['Atencion domiciliaria', 'Clinicas y sanatorios', 'Hospitales', 'Residencias', 'Equipos de cuidados paliativos', 'Instituciones de atencion prolongada'],
    plan: 'Plan de estudios en X modulos',
  },
];

@Component({
  selector: 'app-detalle-capacitacion',
  imports: [RouterLink],
  templateUrl: './detalle-capacitacion.html',
  styleUrl: './detalle-capacitacion.css',
})
export class DetalleCapacitacion {
  readonly capacitacion: CapacitacionDetalle | null;

  constructor(route: ActivatedRoute) {
    const slug = route.snapshot.paramMap.get('slug');
    this.capacitacion = CAPACITACIONES.find((item) => item.slug === slug) ?? null;
  }
}
