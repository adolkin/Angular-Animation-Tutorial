import { multiStepAnimation } from './../_animations/multi-step.animation';

import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-multi-step',
  templateUrl: './multi-step.component.html',
  styleUrls: ['./multi-step.component.css'],
  animations: [multiStepAnimation]
})
export class MultiStepComponent implements OnInit {

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

  add() {
    let hero = new Hero('Luke');
    this.heroes.push(hero);
  }

}
