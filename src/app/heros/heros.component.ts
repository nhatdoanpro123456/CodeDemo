import { Component, OnInit, Input } from '@angular/core';
// import { arrayHero } from '../hero_details';
import { Hero } from '../hero/hero';
import { HeroService } from '../hero.service';
import { arrayHero } from '../hero_details';



@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css'],
})

export class HerosComponent implements OnInit {
  selectedHero:Hero;
  hero: Hero[];
  showHero = true;
  newHero='';
  constructor(private heroService: HeroService) {

   }

   onShow(){
     this.showHero = !this.showHero
   }
  getHeroFromServices() {
     this.heroService.getHero().subscribe(
       (updateHeroes) => {
         this.hero = updateHeroes;
         console.log(`this.hero = ${JSON.stringify(this.hero)}`);
       }
     );
   }
   addHero (){
     if(this.newHero){
      this.hero.push({
        id: this.hero.length + 1,
        name: this.newHero
      })
     }
     this.newHero = '';
    //  console.log(arrayHero);
   }

  ngOnInit() {
    this.getHeroFromServices();
  }
}
