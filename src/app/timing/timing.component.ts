import { timingAnimation } from './../_animations/timing.animation';
import { autoAnimation } from './../_animations/auto.animation';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-timing',
  templateUrl: './timing.component.html',
  styleUrls: ['./timing.component.css'],
  animations: [timingAnimation]
})
export class TimingComponent implements OnInit {


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
