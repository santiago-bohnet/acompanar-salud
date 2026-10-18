import { Component } from '@angular/core';

type NewsCategory = 'Capacitaciones' | 'Servicios' | 'Actividades' | 'Comunicados';

type NewsItem = {
  category: NewsCategory;
  date: string;
  title: string;
  description: string;
  body: string;
};

@Component({
  selector: 'app-novedades',
  imports: [],
  templateUrl: './novedades.html',
  styleUrl: './novedades.css',
})
export class Novedades {
  readonly whatsappUrl = 'https://wa.me/5492996110442';
  readonly instagramUrl = '#'; // TODO: completar con URL real de Instagram.
  readonly facebookUrl = '#'; // TODO: completar con URL real de Facebook.
  readonly filters: Array<'Todas' | NewsCategory> = ['Todas', 'Capacitaciones', 'Servicios', 'Actividades', 'Comunicados'];
  activeFilter: 'Todas' | NewsCategory = 'Todas';
  selectedNews: NewsItem | null = null;

  readonly featured: NewsItem = {
    category: 'Capacitaciones',
    date: 'Próximamente',
    title: 'Nuevas propuestas de formación',
    description: 'Estamos preparando nuevas capacitaciones orientadas al cuidado, el acompañamiento y la atención integral.',
    body: 'Contenido ampliado temporal. Este espacio se reemplazará cuando se confirme la información completa de la publicación.',
  };

  readonly news: NewsItem[] = [
    { category: 'Capacitaciones', date: 'Próximamente', title: 'Inscripciones a nuevas capacitaciones', description: 'En breve se publicarán fechas, horarios y modalidades de las próximas propuestas formativas.', body: 'Contenido ampliado temporal sobre próximas inscripciones, fechas y modalidad de cursada.' },
    { category: 'Servicios', date: 'Próximamente', title: 'Nuevos servicios disponibles', description: 'Se ampliará la información sobre atención domiciliaria y servicios en consultorio.', body: 'Contenido ampliado temporal sobre servicios disponibles y canales de consulta.' },
    { category: 'Actividades', date: 'Próximamente', title: 'Encuentros para la comunidad', description: 'Estamos organizando actividades informativas y espacios de acompañamiento.', body: 'Contenido ampliado temporal sobre actividades comunitarias y espacios informativos.' },
    { category: 'Comunicados', date: 'Próximamente', title: 'Información institucional', description: 'Este espacio reunirá anuncios y actualizaciones importantes de Acompañar Salud.', body: 'Contenido ampliado temporal para comunicados y novedades institucionales.' },
    { category: 'Capacitaciones', date: 'Próximamente', title: 'Materiales y contenidos de cursada', description: 'Se publicará información sobre programas, módulos y recursos de cada capacitación.', body: 'Contenido ampliado temporal sobre materiales, módulos y recursos de cursada.' },
    { category: 'Servicios', date: 'Próximamente', title: 'Orientación para elegir un servicio', description: 'Se incorporarán guías breves para ayudar a identificar la atención más adecuada.', body: 'Contenido ampliado temporal con criterios generales para orientar la consulta inicial.' },
  ];

  get filteredNews(): NewsItem[] {
    return this.activeFilter === 'Todas' ? this.news : this.news.filter((item) => item.category === this.activeFilter);
  }

  setFilter(filter: 'Todas' | NewsCategory): void {
    this.activeFilter = filter;
    this.selectedNews = null;
  }

  openNews(item: NewsItem): void {
    this.selectedNews = item;
  }

  closeNews(): void {
    this.selectedNews = null;
  }
}
