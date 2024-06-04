import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Animal } from './animal';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Zoo Book';
  animals: Animal[] = [
    {
      name: 'Hansi',
      type: 'ape',
    },
    {
      name: 'Schildi',
      type: 'turtle',
    },
    {
      name: 'Joane',
      type: 'elefant',
    },
  ];
  newAnimal: Animal = {
    name: '',
    type: '',
  };

  deleteAnimal(animal: Animal): void {
    this.animals = this.animals.filter((a) => a != animal);
  }

  addAnimal() {
    this.animals.push(this.newAnimal);
  }
}
