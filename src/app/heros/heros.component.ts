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
   addHero (newIdHero: string,newNameHero: string){
     const obj = new Hero(parseInt(newIdHero),newNameHero);
     if(newIdHero && newNameHero){
       arrayHero.push(obj);
     }
     console.log(arrayHero);
   }

   delHero(id:any){
    // let index = this.hero.findIndex(eachHero => eachHero.id ===index);
    // console.log(index);
    // this.hero.splice(index,1);
   }
  ngOnInit() {
    this.getHeroFromServices();
  }
}
