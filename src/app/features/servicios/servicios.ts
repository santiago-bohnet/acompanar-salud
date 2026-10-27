import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CATEGORIAS_DOMICILIARIAS } from './catalogo-domiciliario';

@Component({
  selector: 'app-servicios',
  imports: [RouterLink],
  templateUrl: './servicios.html',
  styleUrl: './servicios.css',
})
export class Servicios {
  readonly categoriasDomiciliarias = CATEGORIAS_DOMICILIARIAS;
  readonly whatsappUrl = 'https://wa.me/5492996110442';

  scrollToServices(event: Event): void {
    event.preventDefault();
    document.getElementById('servicios-listado')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
