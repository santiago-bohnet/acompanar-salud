import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CATEGORIAS_DOMICILIARIAS } from '../servicios/catalogo-domiciliario';

@Component({
  selector: 'app-solicitar-atencion',
  standalone: true,
  imports: [FormsModule],
  template: `
    <main class="request-page">
      <div class="request-shell">
        <p class="eyebrow">Acompañar Salud · Cipolletti</p>
        <h1>Solicitar orientación sobre atención</h1>
        <p class="subtitle">Completá estos datos básicos para preparar una consulta por WhatsApp. No es una solicitud médica formal ni confirma una prestación.</p>
        <div class="notice" role="note"><strong>Protegemos tu información.</strong> No ingreses diagnóstico, DNI, medicación, recetas ni otros datos clínicos en este formulario. No se guarda información en esta página; el mensaje se prepara en tu dispositivo y vos decidís si lo enviás.</div>
        <form #solicitudForm="ngForm" (ngSubmit)="enviar()" novalidate>
          <div class="form-grid">
            <div class="field">
              <label for="nombre">Nombre de contacto *</label>
              <input id="nombre" type="text" name="nombre" autocomplete="name" maxlength="90" required [(ngModel)]="nombre" #nombreCtrl="ngModel" placeholder="Tu nombre" />
              @if (nombreCtrl.invalid && nombreCtrl.touched) { <small>Ingresá tu nombre.</small> }
            </div>
            <div class="field">
              <label for="localidad">Localidad *</label>
              <select id="localidad" name="localidad" required [(ngModel)]="localidad" #localidadCtrl="ngModel">
                <option value="">Seleccioná una localidad</option>
                <option value="Cipolletti">Cipolletti</option>
                <option value="Fernández Oro">Fernández Oro</option>
                <option value="Neuquén">Neuquén</option>
                <option value="Otra localidad">Otra localidad</option>
              </select>
              @if (localidadCtrl.invalid && localidadCtrl.touched) { <small>Elegí una localidad.</small> }
            </div>
            <div class="field">
              <label for="modalidad">Modalidad *</label>
              <select id="modalidad" name="modalidad" required [(ngModel)]="modalidad">
                <option value="Domicilio">Atención domiciliaria</option>
                <option value="Consultorio">Atención en consultorio</option>
              </select>
            </div>
            <div class="field">
              <label for="servicio">Servicio de interés *</label>
              <select id="servicio" name="servicio" required [(ngModel)]="servicio">
                <option value="">Elegí un servicio</option>
                @for (categoria of categorias; track categoria.titulo) {
                  <optgroup [label]="categoria.titulo">
                    @for (item of categoria.prestaciones; track item.nombre) {
                      <option [value]="item.nombre">{{ item.nombre }}</option>
                    }
                  </optgroup>
                }
                <option value="Consulta general">No sé qué servicio necesito</option>
              </select>
            </div>
          </div>
          <div class="field check">
            <label><input type="checkbox" name="acepta" required [(ngModel)]="acepta" /> Comprendo que se abrirá WhatsApp para revisar y enviar mi consulta.</label>
          </div>
          <button type="submit" [disabled]="solicitudForm.invalid">Preparar consulta por WhatsApp →</button>
        </form>
        <p class="footer-note">Si se trata de una urgencia médica, acudí a un servicio de emergencias. No utilices este formulario para emergencias.</p>
      </div>
    </main>
  `,
  styles: [`
    :host { display:block; background:#f3f9fc; color:#19384a; }
    .request-page { padding:clamp(42px,8vw,100px) 20px; }
    .request-shell { max-width:860px; margin:auto; background:#fff; border:1px solid #dbeaf2; border-radius:26px; padding:clamp(24px,5vw,58px); box-shadow:0 18px 55px #164e7312; }
    .eyebrow { color:#1788a6; text-transform:uppercase; letter-spacing:.12em; font-weight:800; font-size:.82rem; }
    h1 { color:#164e73; font-size:clamp(2rem,4.5vw,3.4rem); line-height:1.08; margin:10px 0 18px; }
    .subtitle { font-size:1.08rem; line-height:1.6; }
    .notice { background:#e9f5fc; border-left:4px solid #298cb7; border-radius:12px; padding:18px; line-height:1.55; margin:28px 0; }
    .form-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:22px; }
    .field { display:flex; flex-direction:column; gap:9px; }
    label { font-weight:750; }
    input:not([type=checkbox]),select { box-sizing:border-box; width:100%; padding:14px; min-height:51px; font:inherit; color:#173f55; border:1px solid #b2cbd7; border-radius:12px; background:white; }
    input:focus-visible,select:focus-visible,button:focus-visible { outline:3px solid #85cae4; outline-offset:2px; }
    small { color:#ad2e2e; }
    .check { margin:24px 0; }
    .check label { display:flex; align-items:flex-start; gap:10px; font-weight:500; line-height:1.5; }
    .check input { margin-top:5px; }
    button { border:0; cursor:pointer; padding:16px 24px; border-radius:30px; background:#164e73; color:#fff; font:inherit; font-weight:800; }
    button:disabled { opacity:.5; cursor:not-allowed; }
    .footer-note { margin-top:26px; color:#4c6573; font-size:.9rem; line-height:1.5; }
    @media(max-width:650px) { .form-grid { grid-template-columns:1fr; } button { width:100%; } }
  `]
})
export class SolicitarAtencion {
  readonly categorias = CATEGORIAS_DOMICILIARIAS;
  nombre = '';
  localidad = '';
  modalidad = 'Domicilio';
  servicio = '';
  acepta = false;

  enviar(): void {
    if (!this.nombre.trim() || !this.localidad || !this.servicio || !this.acepta) return;
    const mensaje = [
      'Hola, quiero consultar por un servicio de Acompañar Salud.',
      'Nombre de contacto: ' + this.nombre.trim(),
      'Localidad: ' + this.localidad,
      'Modalidad: ' + this.modalidad,
      'Servicio de interés: ' + this.servicio,
      '¿Podrían indicarme disponibilidad y los próximos pasos?'
    ].join('\n');
    window.open('https://wa.me/5492996110442?text=' + encodeURIComponent(mensaje), '_blank', 'noopener,noreferrer');
  }
}
