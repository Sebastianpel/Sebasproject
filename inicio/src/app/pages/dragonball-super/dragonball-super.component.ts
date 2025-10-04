import {Component, computed, signal} from "@angular/core";
import {NgClass} from '@angular/common';
import {CharacterList} from '../../components/dragonball/character-list/character-list';
import {CharacterAdd} from '../../components/dragonball/character-add/character-add';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-super',
  imports: [
    NgClass,
    CharacterList,
    CharacterAdd
  ],
  templateUrl: 'dragonball-super.component.html',
})

export class dragonballSuperComponent {
  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    {id: 1, name: 'Goku', power: 8080},
    {id: 2, name: 'Benja', power: 7000},
    {id: 3, name: 'Benardo', power: 4000},
    {id: 4, name: 'Benjamin', power: 500 },
  ]);

  powerClass = computed(() => {
    return {
      'text-danger': true,
    };
  });

}
