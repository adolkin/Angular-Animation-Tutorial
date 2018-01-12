import { multiStepAnimation } from './../_animations/multi-step.animation';
import { autoAnimation } from './../_animations/auto.animation';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css'],
  animations: [multiStepAnimation]
})
export class CallbackComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    // this.getHeroes();
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

  animationStarted(event: AnimationEvent) {
    console.warn('Animation started: ', event);
  }

  animationDone(event: AnimationEvent) {
    console.warn('Animation done: ', event);
  }
}
