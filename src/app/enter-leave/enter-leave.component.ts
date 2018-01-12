import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { enterleaveAnimation } from '../_animations/enter-leave.animation';


@Component({
  selector: 'app-enter-leave',
  templateUrl: './enter-leave.component.html',
  styleUrls: ['./enter-leave.component.css'],
  animations:[enterleaveAnimation] 
})
export class EnterLeaveComponent implements OnInit {

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
