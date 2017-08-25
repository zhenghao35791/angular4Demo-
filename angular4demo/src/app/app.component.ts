import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';

import { HeroService } from './hero.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    /*
    * providers数组告诉 Angular，当它创建新的AppComponent组件时，也要创建一个HeroService的新实例。
     * AppComponent会使用那个服务来获取英雄列表，在它组件树中的每一个子组件也同样如此。
    * */
    providers: [HeroService]
})

export class AppComponent {
    title = 'Tour of Heros';
    heroes: Hero[];
    selectedHero: Hero;
    /* 添加一个构造函数，并定义一个私有属性。添加组件的providers元数据。
    构造函数自己什么也不用做，它在参数中定义了一个私有的heroService属性，并把它标记为注入HeroService的靶点。
    当创建AppComponent实例时，Angular 知道需要先提供一个HeroService的实例。
    */

    constructor(private heroService: HeroService) { }
    gerHeroes() : void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    ngOnInit() : void {
        this.gerHeroes();
    }
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
        console.log(hero.name);
    }
    /*
    hero: Hero = {
      id: 1,
      name: 'windStorm'
    };
    */
}
