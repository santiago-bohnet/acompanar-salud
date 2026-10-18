import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/navbar/navbar';
import { Footer } from './shared/footer/footer';
import { WhatsAppFloatingButton } from './shared/whatsapp-floating-button/whatsapp-floating-button';

@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        Navbar,
        Footer,
        WhatsAppFloatingButton
    ],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App { }