import { enterleaveStatesAnimation } from './../_animations/enter-leave-states.animation';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-enter-leave-states',
  templateUrl: './enter-leave-states.component.html',
  styleUrls: ['./enter-leave-states.component.css'],
  animations: [enterleaveStatesAnimation]
})
export class EnterLeaveStatesComponent implements OnInit {

  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  remove() {
    this.heroes.length -= 1;
  }

  addInactive() {
    let hero = new Hero('1', 'inactive');
    this.heroes.push(hero);
  }

  addActive() {
    let hero = new Hero('2', 'active');
    this.heroes.push(hero);
  }

}
