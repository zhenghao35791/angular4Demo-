import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
    declarations: [ // 声明组件
        AppComponent,
        HeroDetailComponent
    ],
    // @NgModule元数据的imports数组中，它是当前应用正在使用的外部模块列表。
    imports: [
        BrowserModule,
        FormsModule // <-- import the FormsModule before binding with [(ngModel)]
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { } // 根模块会告诉Angular如何组装该应用
