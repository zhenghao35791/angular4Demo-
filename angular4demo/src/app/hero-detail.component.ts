import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'hero-detail',
    templateUrl: './hero-detail.component.html'
})

/*
heroDetail属性是HeroDetailComponent类中唯一的东西。
它所做的一切就是通过它的输入属性heroDetail接收一个英雄对象，
然后把这个属性绑定到自己的模板中。
在heroDetail属性前面加上@Input装饰器，来表明它是一个输入属性。
*/

export class HeroDetailComponent {
    @Input() heroDetail: Hero;
}