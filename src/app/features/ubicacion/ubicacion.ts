import { Component } from '@angular/core';

@Component({
  selector: 'app-ubicacion',
  imports: [],
  templateUrl: './ubicacion.html',
  styleUrl: './ubicacion.css',
})
export class Ubicacion {
  readonly displayAddress = 'General Roca 1175, Cipolletti, Río Negro';
  readonly schedule = 'Miércoles de 8:00 a 12:00';
  readonly phoneDisplay = '+54 9 299 611 0442';
  readonly phoneLink = 'tel:+5492996110442';
  readonly mapsUrl = 'https://www.google.com/maps/search/?api=1&query=General+Roca+1175+Cipolletti+Rio+Negro';
  readonly whatsappUrl = 'https://wa.me/5492996110442';

  // TODO: Agregar correo electrónico cuando esté confirmado.
  // TODO: Incorporar foto de fachada cuando esté disponible.
  // TODO: Sumar referencias para llegar cuando estén confirmadas.
}
