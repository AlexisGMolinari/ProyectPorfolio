import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: []
})
export class ContactoComponent {

  contact = {
    names: '',
    email: '',
    message: '',
    phone: '',
    inquiry_type: '' // Añadido para capturar el tipo de consulta
  };

  errorMessage: string = '';

  constructor() {}

  onSubmit() {
    this.errorMessage = '';

    // Validar Nombre (si es necesario)
    if (this.contact.names.trim() === '') {
      this.errorMessage += '<p>Escriba un nombre</p>';
      document.getElementById('names')!.style.borderBottomColor = '#F14B4B';
    } else {
      document.getElementById('names')!.style.borderBottomColor = '#D1D1D1';
    }

    // Validar Correo (si es necesario)
    if (this.contact.email.trim() === '') {
      this.errorMessage += '<p>Ingrese un correo</p>';
      document.getElementById('email')!.style.borderBottomColor = '#F14B4B';
    } else {
      document.getElementById('email')!.style.borderBottomColor = '#D1D1D1';
    }

    // Validar Mensaje (si es necesario)
    if (this.contact.message.trim() === '') {
      this.errorMessage += '<p>Escriba un mensaje</p>';
      document.getElementById('message')!.style.borderBottomColor = '#F14B4B';
    } else {
      document.getElementById('message')!.style.borderBottomColor = '#D1D1D1';
    }

    // Si no hay errores, enviar mensaje por WhatsApp
    if (this.errorMessage === '') {
      const phoneNumber = '543534191311'; // Reemplaza con tu número de teléfono real
      const message = `Hola mi nombre es: ${this.contact.names}.\n Este es mi correo: ${this.contact.email}.\n Me comunico desde: ${this.contact.phone}.\n Lo necesito para: ${this.contact.inquiry_type}.\n Me comunico por lo siguiente: ${this.contact.message}`;
      const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      
      // Abrir WhatsApp
      window.open(whatsappLink, '_blank');

      // Limpia el formulario si es necesario
      this.resetForm();
    }
  }

  resetForm() {
    this.contact = {
      names: '',
      email: '',
      message: '',
      phone: '',
      inquiry_type: '' // Añadido para capturar el tipo de consulta
    };
  }

  closeModal(): void {
    this.errorMessage = '';
    // Restablecer estilos de inputs si es necesario
    this.resetInputStyles('names');
    this.resetInputStyles('email');
    this.resetInputStyles('message');
  }

  private resetInputStyles(inputId: string): void {
    const element = document.getElementById(inputId);
    if (element) {
      element.style.borderBottomColor = '#D1D1D1';
    }
  }
}