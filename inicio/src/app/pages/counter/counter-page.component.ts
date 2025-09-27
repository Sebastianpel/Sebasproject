import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {delay} from 'rxjs';
@Component({
  templateUrl: 'counter-page.component.html',
  styleUrls: ['counter-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterPageComponent {
  counter: number = 0;
  counterSignal= signal(0);

  /*constructor() {
    setInterval(() => {
      this.counter += 1;
      console.log("Se actualizo");
    }, 1000);
  }*/

  add(value: number) {
    this.counter += value;
    this.counterSignal.update((currentValue:number)=> currentValue + value)
  }
  diss(value: number) {
    this.counter -= value;
    this.counterSignal.update((currentValue: number) => currentValue - value)
  }
  reset() {
    this.counter = 0;
  }
}

// Crear dos botones adicionales, respectivos metodos
// decrease, reset
// que no sea dentro del temple que sea dentro del templateUrl
//Creen un archivo intenten respetar el html


//https://github.com/Dani472/ejercicios-clase/blob/main/Actividad-26-09.md
