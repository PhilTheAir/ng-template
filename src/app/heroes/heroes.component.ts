// Step 6: ng generate component heroes
import { Component, OnInit } from '@angular/core';
// Step 11: import the Hero class
import { Hero } from '../hero';
// Step 18: import mock data
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.css' ]
})
export class HeroesComponent implements OnInit {

  // Step 7: add variables here
  // hero = 'Windstorm';

  // Step 12: Consume the Hero type
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  // Step 19: define a property called heroes to expose the HEROES array for binding
  // heroes = HEROES;

  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}