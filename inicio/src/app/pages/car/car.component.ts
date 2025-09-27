import {Component, signal, computed} from '@angular/core';

@Component({
  templateUrl: 'car.component.html'
})

export class CarComponent {
  brand = signal('Renault') ;
  student  = signal('sebastian');
  year = signal(2020);
  getCarDescription = computed(() => `${this.brand()} - ${this.student()} - ${this.year()}`);
  capitalizedStudent = computed(() => `${this.brand()} - ${this.student()}`);

  getCarDescription() {
    return `${this.brand} - ${this.year}`;
  }

  changeCar() {
    this.brand = 'Kia';
    this.year = 2021;
  }

  resetForm() {
    this.brand = 'Renault';
    this.year = 2020;
  }

  changeYear() {
    this.year = 2025;
  }
}


