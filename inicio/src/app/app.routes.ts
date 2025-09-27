
import {Routes} from '@angular/router';
import {CarComponent} from './pages/car/car.component';
import {CounterPageComponent} from './pages/counter/counter-page.component';
import {dragonballComponent} from './pages/dragonball/dragonball.component';

export const routes: Routes = [
  {
    path: 'car',
    component: CarComponent
  },

  {
    path: '',
    component: CounterPageComponent
  },
  {
    path: '*',
    redirectTo: ''
  },
  {
    path: 'dragonball',
    component: dragonballComponent
  }

];
