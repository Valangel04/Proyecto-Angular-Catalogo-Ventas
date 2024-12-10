import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',  // Este es el selector del componente
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  name: string = '';
  favoritePlayer: string = '';
  formSubmitted: boolean = false;

  submitForm() {
    console.log(`Name: ${this.name}, Favorite Player: ${this.favoritePlayer}`);
    this.formSubmitted = true;
  }
}
