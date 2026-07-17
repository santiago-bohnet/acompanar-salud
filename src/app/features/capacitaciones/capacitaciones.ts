import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAward, faCalendarDays, faCheck, faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-capacitaciones',
  imports: [RouterLink, FontAwesomeModule],
  templateUrl: './capacitaciones.html',
  styleUrl: './capacitaciones.css',
})
export class Capacitaciones {
  readonly calendarIcon = faCalendarDays;
  readonly awardIcon = faAward;
  readonly clockIcon = faClock;
  readonly checkIcon = faCheck;

  readonly capacitaciones = [
    {
      titulo: 'Cuidados del adulto mayor',
      slug: 'cuidados-adulto-mayor',
      imagen: '/Cuidadosadultomayor.png',
      duracion: '6 meses',
      modalidad: 'Presencial',
      certificado: 'Si',
      cargaHoraria: '2 horas semanales',
      descripcion: 'Formacion orientada al cuidado integral, acompanamiento y atencion de personas mayores.',
      salidaLaboral: ['Residencias geriatricas', 'Centros de dia', 'Instituciones de salud', 'Atencion domiciliaria', 'Cuidado particular'],
      plan: 'Plan de estudios en X modulos',
    },
    {
      titulo: 'Acompanante terapeutico',
      slug: 'acompanante-terapeutico',
      imagen: '/asistterapeutico.png',
      duracion: '12 meses',
      modalidad: 'Presencial',
      certificado: 'Si',
      cargaHoraria: '2 horas semanales',
      descripcion: 'Formacion orientada al acompanamiento de personas que requieren apoyo terapeutico, social y cotidiano.',
      salidaLaboral: ['Domicilios particulares', 'Instituciones de salud', 'Centros terapeuticos', 'Instituciones educativas', 'Residencias y centros de dia', 'Equipos interdisciplinarios'],
      plan: 'Plan de estudios en X modulos',
    },
    {
      titulo: 'Cuidados paliativos',
      slug: 'cuidados-paliativos',
      imagen: '/cuidadopaliativo.png',
      duracion: '4 meses',
      modalidad: 'Presencial',
      certificado: 'Si',
      cargaHoraria: '2 horas semanales',
      descripcion: 'Formacion para brindar cuidado, contencion y acompanamiento a personas con enfermedades avanzadas y a sus familias.',
      salidaLaboral: ['Atencion domiciliaria', 'Clinicas y sanatorios', 'Hospitales', 'Residencias', 'Equipos de cuidados paliativos', 'Instituciones de atencion prolongada'],
      plan: 'Plan de estudios en X modulos',
    },
  ];
}

