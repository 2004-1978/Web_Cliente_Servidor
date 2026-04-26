import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  mostrarMensaje() {
    alert(
      'Cliente → Navegador → Servidor → Respuesta → Página Web mostrada'
    );
  }
}