import {Component, inject, effect, signal} from "@angular/core";
import {CharacterList} from '../../components/dragonball/character-list/character-list';
import {CharacterAdd} from '../../components/dragonball/character-add/character-add';
import {DragonballService} from '../../services/dragonball.service';

@Component({
  selector: 'app-dragonball-super',
  imports: [
    CharacterList,
    CharacterAdd
  ],
  templateUrl: 'dragonball-super.component.html',
})

export class dragonballSuperComponent {

  public dragonballService = inject(DragonballService)
  count = signal(0)
  prueba(){

    effect(() => {
    console.log(`Prueba : ${this.count()}`);
    })
  }
}
