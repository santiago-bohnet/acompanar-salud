/** Catálogo institucional de atención domiciliaria.
 * Fuente: documentación de servicios recibida en octubre de 2026.
 * La disponibilidad y las indicaciones se confirman por consulta.
 */
export interface PrestacionDomiciliaria {
  nombre: string;
  descripcion: string;
}
export interface CategoriaDomiciliaria {
  titulo: string;
  descripcion: string;
  prestaciones: PrestacionDomiciliaria[];
}
export const CATEGORIAS_DOMICILIARIAS: CategoriaDomiciliaria[] = [
  {
    titulo: 'Atención médica',
    descripcion: 'Evaluaciones y seguimiento según la situación de cada paciente.',
    prestaciones: [
      { nombre: 'Visita y evaluación médica', descripcion: 'Evaluación profesional en el domicilio.' },
      { nombre: 'Seguimiento clínico', descripcion: 'Control y orientación para personas con enfermedades crónicas o en recuperación.' },
      { nombre: 'Cuidados paliativos', descripcion: 'Atención centrada en el alivio de síntomas y el acompañamiento.' }
    ]
  },
  {
    titulo: 'Enfermería profesional',
    descripcion: 'Prácticas de enfermería de acuerdo con la indicación médica y la evaluación profesional.',
    prestaciones: [
      { nombre: 'Medicación e inyectables', descripcion: 'Administración de medicamentos según prescripción.' },
      { nombre: 'Sueros y cuidados de sondas', descripcion: 'Prácticas y seguimiento realizados por personal habilitado.' },
      { nombre: 'Curación de heridas', descripcion: 'Curaciones y cuidado posterior a intervenciones.' },
      { nombre: 'Controles', descripcion: 'Signos vitales y glucemia.' },
      { nombre: 'Otros cuidados', descripcion: 'Toma de muestras, nebulizaciones e higiene en cama, según indicación.' }
    ]
  },
  {
    titulo: 'Rehabilitación',
    descripcion: 'Acompañamiento terapéutico orientado a la movilidad y autonomía.',
    prestaciones: [
      { nombre: 'Kinesiología y fisioterapia', descripcion: 'Rehabilitación motora y respiratoria, según valoración.' },
      { nombre: 'Terapia ocupacional', descripcion: 'Apoyo para realizar actividades cotidianas con mayor autonomía.' }
    ]
  },
  {
    titulo: 'Salud integral',
    descripcion: 'Apoyo interdisciplinario para el paciente y su entorno.',
    prestaciones: [
      { nombre: 'Psicología', descripcion: 'Acompañamiento emocional para pacientes y familias.' },
      { nombre: 'Nutrición', descripcion: 'Orientación nutricional, incluida la alimentación oral o por sonda.' },
      { nombre: 'Fonoaudiología', descripcion: 'Evaluación y atención de dificultades de comunicación o deglución.' }
    ]
  },
  {
    titulo: 'Asistencia y acompañamiento',
    descripcion: 'Cuidados cotidianos adaptados a las necesidades personales.',
    prestaciones: [
      { nombre: 'Higiene y cuidado personal', descripcion: 'Asistencia en aseo, vestido y movilización.' },
      { nombre: 'Acompañamiento', descripcion: 'Apoyo en rutinas y asistencia a controles médicos.' },
      { nombre: 'Apoyo a cuidadores', descripcion: 'Visitas de apoyo para aliviar las tareas del cuidador principal.' }
    ]
  },
  {
    titulo: 'Cuidados especializados',
    descripcion: 'Prestaciones que requieren evaluación y disponibilidad específicas.',
    prestaciones: [
      { nombre: 'Enfermedades crónicas', descripcion: 'Seguimiento y educación para el autocuidado.' },
      { nombre: 'Soporte respiratorio', descripcion: 'Cuidados asociados a oxigenoterapia u otros soportes indicados.' },
      { nombre: 'Alimentación enteral', descripcion: 'Cuidados vinculados a sondas o gastrostomía.' }
    ]
  }
];
