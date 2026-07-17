import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAward, faBookOpen, faCalendarDays, faCheck, faChevronDown, faChevronUp, faCircleInfo, faClock } from '@fortawesome/free-solid-svg-icons';

type CapacitacionDetalle = { slug: string; nombre: string; duracion: string; modalidad: string; certificado: string; cargaHoraria: string; descripcion: string; salidaLaboral: string[]; plan: string; };

const CAPACITACIONES: CapacitacionDetalle[] = [
  { slug: 'cuidados-adulto-mayor', nombre: 'Cuidados del adulto mayor', duracion: '6 meses', modalidad: 'Presencial', certificado: 'Si', cargaHoraria: '2 horas semanales', descripcion: 'Formación orientada al cuidado integral, acompañamiento y atención de personas mayores.', salidaLaboral: ['Residencias geriátricas', 'Centros de día', 'Instituciones de salud', 'Atención domiciliaria', 'Cuidado particular'], plan: 'Plan de estudios en X módulos' },
  { slug: 'acompanante-terapeutico', nombre: 'Acompañante terapéutico', duracion: '12 meses', modalidad: 'Presencial', certificado: 'Si', cargaHoraria: '2 horas semanales', descripcion: 'Formación orientada al acompañamiento de personas que requieren apoyo terapéutico, social y cotidiano.', salidaLaboral: ['Domicilios particulares', 'Instituciones de salud', 'Centros terapéuticos', 'Instituciones educativas', 'Residencias y centros de día', 'Equipos interdisciplinarios'], plan: 'Plan de estudios en X módulos' },
  { slug: 'cuidados-paliativos', nombre: 'Cuidados paliativos', duracion: '4 meses', modalidad: 'Presencial', certificado: 'Si', cargaHoraria: '2 horas semanales', descripcion: 'Formación para brindar cuidado, contención y acompañamiento a personas con enfermedades avanzadas y a sus familias.', salidaLaboral: ['Atención domiciliaria', 'Clínicas y sanatorios', 'Hospitales', 'Residencias', 'Equipos de cuidados paliativos', 'Instituciones de atención prolongada'], plan: 'Plan de estudios en X módulos' },
];

@Component({ selector: 'app-detalle-capacitacion', imports: [RouterLink, FontAwesomeModule], templateUrl: './detalle-capacitacion.html', styleUrl: './detalle-capacitacion.css' })
export class DetalleCapacitacion {
  readonly calendarIcon = faCalendarDays;
  readonly awardIcon = faAward;
  readonly clockIcon = faClock;
  readonly checkIcon = faCheck;
  readonly infoIcon = faCircleInfo;
  readonly bookIcon = faBookOpen;
  readonly downIcon = faChevronDown;
  readonly upIcon = faChevronUp;
  readonly modules = [1, 2, 3, 4, 5];
  readonly capacitacion: CapacitacionDetalle | null;
  openPanel = 'module-1';
  formMessage = '';

  constructor(route: ActivatedRoute) {
    const slug = route.snapshot.paramMap.get('slug');
    this.capacitacion = CAPACITACIONES.find((item) => item.slug === slug) ?? null;
  }

  get carpetaCurso(): string {
    return this.capacitacion?.nombre.toUpperCase() ?? '';
  }

  get heroImage(): string {
    const images: Record<string, string> = {
      'cuidados-adulto-mayor': 'url(/Cuidadosadultomayor.png)',
      'acompanante-terapeutico': 'url(/asistterapeutico.png)',
      'cuidados-paliativos': 'url(/cuidadopaliativo.png)',
    };
    return this.capacitacion ? images[this.capacitacion.slug] : '';
  }

  get heroPosition(): string {
    return 'center';
  }

  togglePanel(panel: string): void {
    this.openPanel = this.openPanel === panel ? '' : panel;
  }

  handleInscripcionSubmit(event: Event): void {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    if (!form.checkValidity()) {
      this.formMessage = 'Completá los campos obligatorios para enviar la consulta.';
      form.reportValidity();
      return;
    }
    this.formMessage = 'Gracias. Recibimos tu consulta y te contactaremos a la brevedad.';
    form.reset();
  }
}