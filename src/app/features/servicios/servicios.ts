import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios',
  imports: [],
  templateUrl: './servicios.html',
  styleUrl: './servicios.css',
})
export class Servicios {
  readonly whatsappUrl = 'https://wa.me/5492996110442';

  scrollToServices(event: Event): void {
    event.preventDefault();
    document.getElementById('servicios-listado')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
