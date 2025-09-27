
import {Routes} from '@angular/router';
import {CarComponent} from './pages/car/car.component';
import {CounterPageComponent} from './pages/counter/counter-page.component';
import {dragonballComponent} from './pages/dragonball/dragonball.component';
import {dragonballSuperComponent} from './pages/dragonball-super/dragonball-super.component';

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
    path: 'dragonball',
    component: dragonballComponent
  },
  {
    path: 'dragonball-super',
    component: dragonballSuperComponent
  },
  {
    path: '**',
    redirectTo: ''
  },
];
