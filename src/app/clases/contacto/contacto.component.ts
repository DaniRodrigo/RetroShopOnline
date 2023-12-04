import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  public contacto: {
    nombre: string;
    email: string;
    mensaje: string;
    juegoBuscado: string;
  } = {
    nombre: '',
    email: '',
    mensaje: '',
    juegoBuscado: ''
  };

  submit(form: NgForm): void {
    if (form.valid) {
      // Aquí puedes manejar la lógica para enviar el formulario
      console.log('Formulario válido. Datos:', this.contacto);
      // Puedes enviar la información al servidor o realizar otras acciones según tus necesidades.
    }
  }
}
