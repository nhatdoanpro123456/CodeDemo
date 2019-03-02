import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero/hero';
//route
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
//Lay data
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input()hero:Hero;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getIdHeroFromRoute();
  }


  getIdHeroFromRoute(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    // console.log(typeof id)
    console.log(`this.route.napshot.paramMap= ${JSON.stringify(this.route.snapshot.paramMap)}`);
    this.heroService.getHeroFromId(id).subscribe(hero => this.hero=hero);
  }
  goBack():void {
    this.location.back();
  }
}
