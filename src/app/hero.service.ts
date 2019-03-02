import { Injectable } from '@angular/core';
import { arrayHero } from './hero_details';
import { Hero } from './hero/hero';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHero(): Observable<Hero[]> {
    // this.messagesService.add(`${ new Date().toLocaleString()}. Get hero list`);
    return of (arrayHero);
  }
  getHeroFromId(id:number):Observable<Hero>{
    return of (arrayHero.find (hero =>hero.id ===id));
  }
  constructor() {

   }
}
